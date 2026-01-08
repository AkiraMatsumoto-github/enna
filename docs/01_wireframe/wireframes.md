# 詳細ワイヤーフレーム & 実装仕様書

本ドキュメントは、各ページのレイアウト構成（ASCIIアート）、デザイン意図、レスポンシブ挙動、およびデータ取得元を定義します。

---

## 1. Top Page (`/`)

### 1-1. Composition (ASCII Layout)

**Mobile (SP)**
```text
+---------------------------+
| [Logo]        [Hamburger] | <- Header (Fixed)
+---------------------------+
| [      Hero Image       ] |
| "子どもに寄り添う         |
|  オンリーワンの保育"      |
| [ CTA: 面談予約 ]         |
+---------------------------+
| (Catch: ひとりで...)      |
| Text text text...         |
+---------------------------+
| [Feature 1: Pro]          |
|  (Icon)                   |
|  Title / Desc             |
+---------------------------+
| [Feature 2: Play]         |
|  (Icon)                   |
|  Title / Desc             |
+---------------------------+
| [Feature 3: Heart]        |
|  (Icon)                   |
|  Title / Desc             |
+---------------------------+
| [News List (microCMS)]    |
| - 2024.01.01 Title...     |
| - 2024.01.01 Title...     |
+---------------------------+
| [Reviews (Carousel)]      |
|  < [Review Card] >        |
+---------------------------+
| [Bottom CTA Section]      |
|  "まずはオンラインで..."  |
|  [ CTA: 問い合わせ ]      |
+---------------------------+
| Footer                    |
+---------------------------+
```

**Desktop (PC)**
```text
+-------------------------------------------------------+
| [Logo]                   [Menu: Top Profile ... CTA]  |
+-------------------------------------------------------+
| [         Hero Image (Right or Background)          ] |
|   "子どもに寄り添う         (Image of Hugging)      |
|    オンリーワンの保育"                              |
|   [ CTA Button ]                                    |
+-------------------------------------------------------+
| [ Catch & Intro Text Centered                       ] |
+-------------------------------------------------------+
| Features (3 Columns)                                  |
| +--------------+ +--------------+ +--------------+    |
| | [Feature 1]  | | [Feature 2]  | | [Feature 3]  |    |
| | Icon/Title   | | Icon/Title   | | Icon/Title   |    |
| +--------------+ +--------------+ +--------------+    |
+-------------------------------------------------------+
| [ News List (Horizontal or List) ]                    |
+-------------------------------------------------------+
...
```

### 1-2. Specification

*   **Design Intent**:
    *   **FV**: 安心感を最優先。プロが赤ちゃんを抱っこしている温かい画像を使用。CTAは常に押しやすい位置（SPは追従も検討）。
    *   **Features**: 縦積み（SP）から横3列（PC）へ変化。アイコンを大きく使い、視覚的に分かりやすく。
    *   **News**: 更新頻度をアピールし、稼働している安心感を与える。
*   **Data Source**:
    *   **Hero/Features**: Static (astroファイル内に記述 or 定数ファイル)
    *   **News**: **microCMS (news endpoint)**
        *   `limit=3`, `fields=id,title,publishedAt,category`
    *   **Reviews**: Static (初期はハードコード、増えたらmicroCMS化検討)

---

## 2. Profile Page (`/profile`)

### 2-1. Composition

**Mobile (SP)**
```text
+---------------------------+
| [Profile Photo (Round)]   |
| Name / Title              |
+---------------------------+
| [Message Section]         |
| "保育への想い..."         |
| Text text text...         |
+---------------------------+
| [History (Timeline)]      |
| | 20xx 認可保育園         |
| | 20xx インドネシア       |
| o 20xx 産後ケア施設       |
+---------------------------+
| [Certifications]          |
| - 保育士                  |
| - 幼稚園教諭              |
| ...                       |
+---------------------------+
```

### 2-2. Specification

*   **Design Intent**:
    *   **Photo**: 笑顔の写真を大きく配置し、人柄を伝える。
    *   **Timeline**: 経験の豊富さを時系列で見せることで、信頼感を醸成する。
*   **Data Source**:
    *   **All Content**: Static (変更頻度が低いためハードコード推奨)

---

## 3. Service Page (`/service`)

### 3-1. Composition

**Mobile (SP)**
```text
+---------------------------+
| [Heading: 料金プラン]     |
+---------------------------+
| [Basic Plan Box]          |
|  1時間あたり              |
|  ¥X,XXX                   |
|  (条件: 3h~ / 0歳~)       |
+---------------------------+
| [Options Table]           |
|  土日祝 | +20%            |
|  病児   | +500円/h        |
+---------------------------+
| [Activities]              |
| +-----------------------+ |
| | [Image: 小麦粉粘土]   | |
| | Title / Price         | |
| +-----------------------+ |
| +-----------------------+ |
| | [Image: 手形アート]   | |
| | Title / Price         | |
| +-----------------------+ |
+---------------------------+
```

### 3-2. Specification

*   **Design Intent**:
    *   **Pricing**: パッと見て計算しやすいよう、大きく表示。
    *   **Activities**: 写真を添えて、「楽しそう」「頼んでみたい」と思わせる（アップセル要素）。
*   **Data Source**:
    *   **All Content**: Static (料金改定時はコード修正)

---

## 4. Flow & FAQ Page (`/flow`)

### 4-1. Composition

**Mobile (SP)**
```text
+---------------------------+
| [Step 1: お問い合わせ]    |
|  ↓                        |
| [Step 2: 事前面談]        |
|  (Zoom icon)              |
|  ↓                        |
| [Step 3: シッティング]    |
+---------------------------+
| [FAQ Accordion]           |
| > 病児保育は対応可？      |
|   (v Open: 条件あり...)   |
| > 支払方法は？            |
+---------------------------+
```

### 4-2. Specification

*   **Design Intent**:
    *   **Step**: 縦方向の矢印で自然な流れを表現。
    *   **FAQ**: アコーディオンUI（`<details>`, `<summary>`）を使い、長くなりすぎないように整理。
*   **Data Source**:
    *   **All Content**: Static

---

## 5. Contact Page (`/contact`)

### 5-1. Composition

**Mobile (SP)**
```text
+---------------------------+
| お名前 [ Input ]          |
+---------------------------+
| メール [ Input ]          |
+---------------------------+
| 種類   [ Select v ]       |
+---------------------------+
| 内容   [ Textarea ]       |
+---------------------------+
| [ Submit Button ]         |
+---------------------------+
```

### 5-2. Specification

*   **Design Intent**:
    *   **Form**: 入力項目を最小限にし、スマホでも入力しやすいサイズ（高さ44px以上）を確保。
    *   **Validation**: 必須項目が空の場合、即座にエラーメッセージを表示（赤字）。
*   **Data Source**:
    *   **Send Logic**: Web3Forms API or microCMS Form API (Client-side fetch)

---
