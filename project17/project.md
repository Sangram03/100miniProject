
---

### ✅ All **Truthy Values** in JavaScript

Any value **not on the falsy list** is **truthy**.

Here are common examples:

---

### 🔹 Primitives

| Value                   | Explanation                            |
| ----------------------- | -------------------------------------- |
| `true`                  | The boolean `true`                     |
| `"hello"`               | Any non-empty string                   |
| `"0"`                   | String containing "0" is **not** falsy |
| `"false"`               | Still a non-empty string               |
| `42`, `-7`, `3.14`      | Any non-zero number                    |
| `Infinity`, `-Infinity` | Special numeric values still truthy    |
| `Symbol("sym")`         | Symbols are always truthy              |
| `BigInt(1)`             | Any non-zero BigInt is truthy          |

---

### 🔹 Objects & Arrays

| Value           | Explanation                            |
| --------------- | -------------------------------------- |
| `{}`            | Empty object                           |
| `[]`            | Empty array                            |
| `function() {}` | Functions are always truthy            |
| `new Date()`    | Any object, even if "empty", is truthy |
| `new Map()`     | Empty Map is still truthy              |
| `new Set()`     | Same for Set                           |

---

### ✅ Example:

```js
if ("hello") {
  console.log("This is truthy");
}
// Output: This is truthy
```

---

### ❌ Falsy Values (for contrast)

Only **7 values are falsy** in JavaScript:

```js
false
0
-0
0n      // BigInt zero
""      // Empty string
null
undefined
NaN
```

---

### 🧠 Rule of Thumb:

> "If it's not **falsy**, it's **truthy**."

---
