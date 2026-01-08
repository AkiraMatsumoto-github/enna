# 3. Service Page (`/service`)

## 3-1. Composition

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


## 3-2. Specification

*   **Design Intent**:
    *   **Pricing**: パッと見て計算しやすいよう、大きく表示。
    *   **Activities**: 写真を添えて、「楽しそう」「頼んでみたい」と思わせる（アップセル要素）。
*   **Data Source**:
    *   **All Content**: Static (料金改定時はコード修正)
