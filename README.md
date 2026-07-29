# 🧽 obsidian-hechima

**Obsidian で [hechima](https://github.com/msonrm/hechima)（OS 非依存の Web 向け日本語入力スタック）を動かす試み。**

> **現在は偵察（reconnaissance）段階です。入力機能はまだありません。**
> このプラグインが今できるのは「Obsidian の中で日本語入力を作れるか」を**実機で測ること**だけです。
> 変換して遊べるものを探している方は、先に [へちま言語ラボ](https://luffa-lang-labo.dev) をどうぞ。

## なぜ偵察から始めるのか

Obsidian 版を作るかどうかは、実装を書く前に決まってしまう問いが 2 つあります。どちらも
机上では答えが出ず、実機でしか分かりません。特に **iOS（iPad）** が未知数です。

| 問い | 割れたときの帰結 |
|---|---|
| **変換エンジン（mozc wasm）が起動して変換できるか** | 動かなければ Obsidian 版は成立しない。iOS だけ動かなければ desktop 専用になる |
| **エディタが `keydown` と `keyup` を両方渡すか** | `keyup` が来ないと押下集合を作れず、薙刀式・新下駄のような同時打鍵系は**原理的に**載らない（逐次系だけになる） |

このプラグインは、この 2 つを 1 回の実機往復で測って結果を表示します。

## 使い方

### 1. 辞書と wasm を vault に置く

Safari / ブラウザで次の 2 つを保存し、**vault 直下に `hechima` フォルダ**を作って入れます。

- https://luffa-lang-labo.dev/vendor/hechima-wasm/hechima-wasm.wasm （2.6 MB）
- https://luffa-lang-labo.dev/vendor/hechima-wasm/mozc.data （18.9 MB）

```
<vault>/
  hechima/
    hechima-wasm.wasm
    mozc.data
```

> プラグインフォルダ側（`.obsidian/plugins/hechima-probe/`）に置いても読みます。
> vault 直下も見るようにしてあるのは iOS の都合で、**Files アプリがドットで始まる
> フォルダを見せない**ため、`.obsidian/` 配下に 18.9 MB を手で置く経路が無いからです。

### 2. プラグインを入れる

**[BRAT](https://github.com/TfTHacker/obsidian42-brat) を使うと iPad 単体で完結します。**
BRAT を入れて「Add beta plugin」に `msonrm/obsidian-hechima` を指定してください。

手で入れる場合は `main.js` と `manifest.json` を
`<vault>/.obsidian/plugins/hechima-probe/` に置きます。

設定 → コミュニティプラグイン → 制限モードを解除 → `hechima probe` を有効化。

### 3. 測る

| コマンド | 測るもの |
|---|---|
| **エンジン偵察を実行**（リボンの言語アイコンでも可） | wasm 起動 → 変換 |
| **キー入力の偵察: 開始 / 停止** | `keydown` / `keyup` / 抑止可否 / OS IME の干渉 |

結果はモーダルに出ます。**コピー**か **vault に保存**（`hechima-probe-result.md`）で持ち出せます。

うまくいくと、こう出ます。

```
== 初期化 ==
OK    vault から hechima-wasm.wasm を読む — 28ms
OK    vault から mozc.data を読む — 107ms
OK    wasm をインスタンス化（wasmBinary 直渡し） — 80ms
OK    hechima_init — 99ms

== 変換 ==
      きょうは → 今日は / きょうは / 教は
      いいてんきですね → いい天気ですね / 良い天気ですね / イイ天気ですね
OK    変換「きょうはいいてんきですね」 — 85ms
OK    TZ 検証（「いま」の時刻候補が端末時刻と一致するか） — 10ms
```

### キー入力の偵察について

記録中は打鍵を全部 `preventDefault` で握り潰すので、本文は汚れません。

**iPad で外付けキーボードを使うときは、OS 側の入力ソースを英字（ABC）にしてから測ってください。**
日本語入力のままだと OS の IME が先にキーを食い、`isComposing` が立ちます
（そうなったら結果に WARN が出ます）。

## 設計メモ — URL と戦わずバイトを食わせる

Obsidian mobile は WKWebView + Capacitor で、プラグインのファイルは vault の中にあります。
emscripten の既定経路（`locateFile` → `fetch` / `instantiateStreaming`）を使うと、結果が
「この環境でどの URL スキームが通るか」という**別の問題**に左右されてしまいます。

そこで `.wasm` も `mozc.data` も vault アダプタで**バイト列として読み**、`wasmBinary` と
`FS.writeFile` で直接渡しています。URL 解決は経路に入りません。

Worker も使っていません。hechima-wasm は単スレッドビルド（`SharedArrayBuffer` 非依存 =
COOP/COEP 不要）なので、メインスレッドで完結します。Worker は「メインスレッドで動く」が
確認できた後の最適化であって、偵察で同時に賭ける変数ではないからです。

## この先

両方の偵察が緑なら、未確定文字列の装飾（CodeMirror の `Decoration`）と変換候補
（`showTooltip`）を載せて、[hechima](https://github.com/msonrm/hechima) の
配列エンジンと変換セッション層を配線します。進捗はここに出ます。

## ライセンス

自作部分は [MIT](LICENSE)（Copyright (c) 2026 msonrm）。

`main.js` には Mozc 由来のビルド成果物（Emscripten の glue コード）が含まれます —
**powered by Mozc**。帰属表示は [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) を参照。
