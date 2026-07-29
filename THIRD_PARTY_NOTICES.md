# Third-Party Notices

自作部分のライセンスは [LICENSE](LICENSE)（MIT、Copyright (c) 2026 msonrm）です。

## 本リポジトリが再配布しているもの

`main.js` は 2 つを結合したファイルです。

1. **Emscripten が生成した JavaScript glue**（`hechima-wasm.js`）— 先頭部分
2. プラグイン本体（自作、MIT）— 末尾部分

glue は Emscripten のランタイムコードであり、**Mozc の C++ ソースは含みません**。
ただし Mozc（fcitx5-mozc）の Emscripten ビルドの成果物の一部なので、由来を明示します —
**powered by Mozc**。

### Emscripten（glue の生成元・ランタイム）

- **Repository:** https://github.com/emscripten-core/emscripten
- **License:** MIT / University of Illinois NCSA Open Source License（デュアル）
- Copyright (c) 2010-2014 Emscripten authors, see AUTHORS file.

### Mozc（ビルドの由来）

- **Repository:** https://github.com/google/mozc
- **License:** BSD-3-Clause — Copyright 2010-2018, Google Inc.

### fcitx5-mozc（ビルドハーネス）

wasm ビルドは fcitx-contrib による fcitx5-mozc のビルド構成を利用しています。

- **Repository:** https://github.com/fcitx-contrib/fcitx5-mozc
- **License:** BSD-3-Clause — Copyright (c) 2024, Fcitx contributors

## 本リポジトリが再配布していないもの

**`hechima-wasm.wasm`（Mozc 本体のコード）と `mozc.data`（Mozc システム辞書）は
このリポジトリに含まれません。** 利用者が
[へちま言語ラボ](https://luffa-lang-labo.dev) から取得して vault に置く形をとっています。

これらの完全な帰属表示（Mozc の BSD-3-Clause、辞書の NAIST License / ICOT Free Software /
Public Domain 沖縄辞書）は、配布元である
[msonrm/hechima の THIRD_PARTY_NOTICES.md](https://github.com/msonrm/hechima/blob/main/THIRD_PARTY_NOTICES.md)
にあります。

CC BY-SA の Mozc UT 拡張辞書は使用していません。
