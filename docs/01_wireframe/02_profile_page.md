# 2. Profile Page (`/profile`)

## 2-1. Composition

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

## 2-2. Specification

*   **Design Intent**:
    *   **Photo**: 笑顔の写真を大きく配置し、人柄を伝える。
    *   **Timeline**: 経験の豊富さを時系列で見せることで、信頼感を醸成する。
*   **Data Source**:
    *   **All Content**: Static (変更頻度が低いためハードコード推奨)
