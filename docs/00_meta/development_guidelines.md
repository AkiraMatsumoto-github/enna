# enna 開発ガイドライン

本プロジェクトにおける開発、特にAIアシスタントによるコード編集と検証に関するルールを定めます。

## 1. 技術スタック固有ルール (Astro / Tailwind / microCMS)

### Astro & Component Design
- **Component Driven**: 可能な限りUIをコンポーネント化し、再利用性を高める。
- **Type Safety**: TypeScriptを活用し、Propsの型定義（`interface Props`）を必ず記述する。
- **Structure**:
    - `src/components/common/`: ヘッダー、フッターなど全ページ共通部品
    - `src/components/ui/`: ボタン、カードなど汎用UI部品
    - `src/layouts/`: ページ全体のレイアウト枠

### TailwindCSS Styling
- **Utility First**: 原則として `style` タグでのカスタムCSSは避け、Tailwindのクラスを使用する。
- **Mobile First**: デフォルトはスマホ向けスタイル、`md:` `lg:` でPC向けスタイルを上書きする記述順を守る。
- **Config**: カラーパレットやフォントは `tailwind.config.mjs` で定義し、ハードコードしない。
    - `bg-[#FDFBF7]` ではなく `bg-brand-base` のように使う。

### microCMS Data Fetching
- **Type Safety**: microCMSのレスポンス型（Schema）を `src/types/` 等に定義し、`any` 型を避ける。
- **Security**: API Keyは必ず環境変数 (`import.meta.env.MICROCMS_API_KEY`) から読み込む。クライアントサイドに露出させない。

## 2. コード編集の原則：最小侵襲 (Minimal Invasive Editing)

既存のコードを修正する際は、**「必要な箇所だけを、最小限の範囲で」**変更することを絶対の原則とします。

### ❌ 悪い例：ファイル全体や巨大なブロックの置換
```typescript
// buttonのクラスを一つ変えたいだけなのに、コンポーネント全体を再定義
---
interface Props { ... }
const { title } = Astro.props;
---
<div class="old-class">
  ...
</div>
```

### ✅ 良い例：ピンポイントな差分編集
```typescript
// 変更したい行とその前後数行だけをターゲットにする
<button class="bg-brand-main text-white ...">
  {label}
</button>
```

**ルール:**
- `replace_file_content` を使用する際は、変更対象の行数を可能な限り少なくする（推奨：5〜10行以内）。
- ファイル全体を読み込んで再出力するような操作は、新規作成時以外は避ける。

### ⚠️ 禁止事項：既存ファイルの Overwrite
- **禁止:** 既存ファイルに対して `write_to_file (Overwrite=true)` を使用すること。

## 3. 検証の原則：成果物ベースの確認

### 確認項目リスト
1.  **ビルド確認**: `npm run build` が通るか？
2.  **型チェック**: `npm run check` (astro check) で型エラーがないか？
3.  **UI確認**: 生成されたコードがモバイルファーストの原則に従っているか？

## 4. クリーンアップ

検証のために作成した一時ファイルやデバッグ用スクリプトは、タスク完了時に必ず削除してください。

- **対象:** `debug_*.ts`, `temp_*.astro` など。
