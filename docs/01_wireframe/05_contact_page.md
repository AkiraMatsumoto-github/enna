# 5. Contact Page (`/contact`)

## 5-1. Composition

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

## 5-2. Specification

*   **Design Intent**:
    *   **Form**: 入力項目を最小限にし、スマホでも入力しやすいサイズ（高さ44px以上）を確保。
    *   **Validation**: 必須項目が空の場合、即座にエラーメッセージを表示（赤字）。
*   **Data Source**:
    *   **Send Logic**: Web3Forms API or microCMS Form API (Client-side fetch)
