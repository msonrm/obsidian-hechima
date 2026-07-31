# 🧽 obsidian-hechima

**Obsidian のエディタで動く日本語入力（IME）。**
[hechima](https://github.com/msonrm/hechima)（OS 非依存の Web 向け日本語入力スタック）を
プラグインに内蔵しているので、**システムの IME に依存しません**。

変換エンジンは Mozc を WebAssembly にしたもの（`main.js` 同梱）。desktop / iPad /
Android の実機で動作を確認しています。

> 触って試すだけなら [へちま言語ラボ](https://luffa-lang-labo.dev) が早いです（インストール不要）。

## 何ができるか

| | |
|---|---|
| **6 方式の配列** | ローマ字、Colemak、AZIK、月配列2-263、薙刀式 v18、NICOLA（それぞれ JIS / US 版） |
| **自前の配列を足せる** | vault に配列 JSON を置くと一覧に出る（[フォーマット](https://github.com/msonrm/logical-layout-labo)） |
| **同時打鍵** | 薙刀式の相互シフト、NICOLA の親指シフト（`keyup` が届く環境のみ・下記） |
| **文節の移動・伸縮** | `←` `→` / `Shift+←` `Shift+→` |
| **確定アンドゥ・再変換** | 確定直後の取り消し、選択範囲の読みへの巻き戻し |
| **学習** | 学習データは vault に置くので Obsidian Sync で端末間を渡る。リセットも設定から |
| **ユーザー辞書** | 変換できない語を登録。一覧・追加・削除と TSV 書き出し。これも vault なので端末間を渡る |
| **親指キーの割り当て変更** | 設定で**押して割り当て**。OS が奪うキーはここにも届かないので、押しても反応しなければ「この端末では使えない」とその場で分かる |

## 入れる

### 1. プラグイン

[BRAT](https://github.com/TfTHacker/obsidian42-brat) の「Add beta plugin」に
`msonrm/obsidian-hechima` を指定します。**iPad 単体で完結します。**

手で入れるなら `main.js` と `manifest.json` を
`<vault>/.obsidian/plugins/hechima-probe/` へ。

設定 → コミュニティプラグイン → 制限モードを解除 → `hechima` を有効化。

### 2. 辞書

**初回に自動で取得します**（`hechima-wasm.wasm` 2.6 MB + 辞書 18.9 MB）。
落としたものは IndexedDB に持つので、2 回目からは取りに行きません。vault には
入れないので、Obsidian Sync が 18.9 MB を運ぶこともありません。

自動取得を待ちたくない / オフラインで入れたい場合は、次の 2 つを保存して
**vault 直下に `hechima` フォルダ**を作り、そこへ置いてください。

- https://luffa-lang-labo.dev/vendor/hechima-wasm/hechima-wasm.wasm
- https://luffa-lang-labo.dev/vendor/hechima-wasm/mozc.data

vault 直下も見るようにしてあるのは iOS の都合で、**Files アプリがドットで始まるフォルダを
見せない**ため、`.obsidian/` 配下へ 18.9 MB を手で置く経路が無いからです。

### 3. 使う

**リボンの言語アイコンで日本語入力の ON / OFF。** アイコンが点いている間が ON です。
配列は設定 → 「配列」から選びます。

**iPad で外付けキーボードを使うときは、OS 側の入力ソースを英字（ABC）にしてください。**
日本語入力のままだと OS の IME が先にキーを食います。

## 環境ごとの差 — 同時打鍵が載るかどうか

薙刀式や NICOLA のような同時打鍵系は、**エディタが `keyup` を返す環境でしか原理的に成立しません**。
`keydown` しか来ないと「D を押しながら x」と「D を打ってから x」が同一のイベント列になり、
近似ではなく区別そのものが不可能だからです。

| 環境 | 変換 | 同時打鍵 |
|---|---|---|
| desktop（Electron 版。Windows / Linux で確認） | OK | OK |
| **iPad + 外付けキーボード** | OK | OK |
| Android スマホ + Bluetooth キーボード | OK | **未対応**（実 `keyup` は届くので載る見込み。未配線） |
| **ChromeOS の Android 版アプリ** | OK | **不可**（`keyup` が来ない。逐次系のみ） |

### 親指キー（NICOLA）

親指シフトの左右キーをどこに置くかは**環境の都合**で、配列の都合ではありません。
OS が先に奪うキーがあるためです。

| キー | iPad | ChromeOS |
|---|---|---|
| スペース | 通る | 通る |
| 無変換 / 変換 | **OS が奪う** | 通る（`英数` / `かな` として届く） |
| Alt | 文字キーとの同時押しを**OS が奪う** | 通る |

**iPad で親指に使えるのは実質スペースだけ**です。設定の「押して割り当て」で自分の環境に
合わせて変えられます。押しても反応しないキーは、その端末では使えないキーです。

NICOLA US は `space` を左親指に割り当ててあるので、iPad ではそちらのほうが打てます。

## 設計メモ — URL と戦わずバイトを食わせる

Obsidian mobile は WKWebView + Capacitor で、プラグインのファイルは vault の中にあります。
emscripten の既定経路（`locateFile` → `fetch` / `instantiateStreaming`）を使うと、結果が
「この環境でどの URL スキームが通るか」という**別の問題**に左右されてしまいます。

そこで `.wasm` も辞書も**バイト列として読み**、`wasmBinary` と `FS.writeFile` で直接渡しています。
URL 解決は経路に入りません。

Worker も使っていません。hechima-wasm は単スレッドビルド（`SharedArrayBuffer` 非依存 =
COOP/COEP 不要）なので、メインスレッドで完結します（init 約 100〜200ms）。

未確定文字列は `Decoration.widget` で描いていて、**文書には書きません**。Obsidian は
自動保存するので、実テキストとして挿入すると打ちかけのかなが `.md` に書かれてしまいます。

## 診断コマンド

作る前に実機で測るために書いたもので、今も残してあります。不具合の切り分けに使えます。

| コマンド | 測るもの |
|---|---|
| **変換エンジンの自己診断** | wasm 起動 → 辞書読み込み → 変換 → タイムゾーン |
| **キー入力の偵察: 開始 / 停止** | `keydown` / `keyup` / 抑止可否 / OS IME の干渉 |
| **バージョンを表示** | 結合した 3 本の版（不具合報告に添えてください） |

### ユーザー辞書

コマンド「ユーザー辞書」か、設定タブの「開く」から。よみの検証は **Mozc 純正**（カタカナ→ひらがな、かな + 英数字のみ。漢字は弾かれます）。

**Google 日本語入力 / Gboard の TSV を読み込む機能はまだありません。** 追加 API が1 件ごとに辞書全体の保存とエンジンのリロードを行う実装なので、まとめて入れるには変換エンジン側にバッチ API を足す必要があります。**書き出しは対応済み**です。

結果はモーダルに出ます。コピーか vault への保存（`hechima-probe-result.md`）で持ち出せます。

## ライセンス

自作部分は [MIT](LICENSE)（Copyright (c) 2026 msonrm）。

`main.js` には Mozc 由来のビルド成果物が含まれます — **powered by Mozc**。
帰属表示は [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) を参照。

source の正典は [msonrm/logical-layout-labo](https://github.com/msonrm/logical-layout-labo) の
`obsidian-plugin/` です。このリポジトリは BRAT が読むための成果物置き場です。
