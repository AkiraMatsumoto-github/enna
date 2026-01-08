# デザインガイドライン - enna

## 1. デザインコンセプト振り返り
**「ママと赤ちゃんを包み込む、プロフェッショナルの温もり」**
*   **Mobile First**: ターゲット（忙しいママ）の9割以上がスマホ閲覧と想定。スマホでの体験を最優先する。
*   **Tone & Manner**: 安心感、清潔感、親しみやすさ、プロフェッショナル。

## 2. カラーパレット (Color Palette)

| Role | Color Name | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Base** | **Warm Ivory** | `#FDFBF7` | 背景全体。真っ白 (`#FFFFFF`) は目に痛いため、少し黄みを入れた優しさ。 |
| **Main** | **Muted Pink** | `#D8A7B1` | 信頼と愛情を表す落ち着いたピンク。ボタン、見出しのアクセント。 |
| **Sub** | **Sage Green** | `#9CAF88` | リラックス、安心感。アイコンや背景の装飾に使用。 |
| **Accent** | **Warm Charcoal** | `#4A4A4A` | テキスト、引き締め色。真っ黒 (`#000000`) ではなくグレー寄り。 |
| **Text** | **Dark Gray** | `#333333` | 本文。可読性を確保。 |
| **Light** | **Pale Pink** | `#F4E3E7` | セクション背景などの薄い装飾色。 |

## 3. タイポグラフィ (Typography)

日本語フォントは「親しみやすさ」を重視して丸ゴシック体を採用。
英語・数字は「洗練」されたサンセリフ体を使用。

*   **Font Family**:
    *   JP: `Zen Maru Gothic` (Weight: 400, 500, 700)
    *   EN: `Outfit` or `Lato` (Weight: 400, 700)
    *   Base Size: `16px` (Mobile), `18px` (Desktop) - 読みやすさ重視

*   **Heading Styles**:
    *   `h1`: Mobile `24px` / Desktop `32px` (Bold, Main Color)
    *   `h2`: Mobile `20px` / Desktop `24px` (Bold, Accent Color, Icon付きなど)
    *   `h3`: Mobile `18px` / Desktop `20px` (Medium, Accent Color)

## 4. UIコンポーネント (UI Components)

### Buttons
角丸を少し強めにし、「触りたくなる」形状に。
*   **Primary Button**:
    *   Bg: `#D8A7B1` (Main)
    *   Text: `#FFFFFF`
    *   Radius: `9999px` (Pill shape)
    *   Shadow: `shadow-md` (ふわりと浮いている感じ)
*   **Secondary Button**:
    *   Bg: `#FFFFFF`
    *   Border: `1px solid #D8A7B1`
    *   Text: `#D8A7B1`

### Cards
コンテンツ（お知らせ、料金プラン）を囲む枠。
*   Bg: `#FFFFFF`
*   Radius: `16px` (柔らかい印象)
*   Shadow: `shadow-sm` (控えめな影)
*   Padding: `24px` (余白をたっぷり取ることで高級感を演出)

## 5. モバイルファースト・レイアウト戦略

1.  **シングルカラム基本**:
    *   スマホではコンテンツを縦に積む。
    *   横揺れを防ぐため、左右paddingは `20px` (Tailwind `px-5`) を確保。
2.  **タップ領域の確保**:
    *   ボタンやリンクは `44px` 以上の高さを確保（指で押しやすく）。
3.  **ハンバーガーメニュー**:
    *   スマホのナビゲーションは右上のハンバーガーメニューに格納。
    *   メニュー展開時は全画面オーバーレイで押しやすく。
4.  **固定CTA**:
    *   スマホ画面下部に「LINEで相談」「Web予約」などの固定ボタンを配置する検討（今回はまずは標準配置で、必要に応じて追加）。
