<img width="2986" alt="Quro-Discord-Art@2x" src="https://user-images.githubusercontent.com/24543982/85203876-7714ea80-b34b-11ea-99e0-6741630f6475.png">

<h2 align="center">Kuro</h2>
<p align="center">Generic programming language and environment written in TypeScript.</p>
<div align="center"></div>

## 📝 Details

Kuro is a programming language with a safe, general syntax that can be embedded in a variety of platforms.

## 💻 Platforms

The Kuro language will be available on the following platforms.(🌴 is tree-walk interpreter. ↪️ is transpiler.)

- [ ] 🌴Node.js
- [ ] 🌴Browser JS
- [ ] ↪️Kuro to JS
- [ ] 💻Kuro VM

## 🚀 Features

- Output lexes of the source code.
- Output AST of the lexes or source code.
- Debugging helper for token and AST.

## ⭐️ Future Syntax

(using rust highlight syntax)

### Tax calculation

```rust
use io

fn tax(tax, price) {
  price + price * (tax / 100)
}

fn suffix(suffix, value) {
  value + suffix // join value and suffix and returns it.
}

const yen = suffix("yen") // create yen function that returns join given value and "yen".
const tax10 = tax(10)     // create tax10 function that returns amount of the 10% sales tax applied.

1000 -> tax10 -> yen -> println // 1100
```

### Browser & Fetch API

```rust
use "browser" * // expand all fields of "browser" module.

const url = "https://jsonplaceholder.typicode.com/todos/1"

fn format(object) {
  JSON.stringify(json, undefined, 2)
}

const pre = document.createElement("pre")

pre.innerHTML = url -> fetch -> await -> json -> await -> format

pre -> document.body.appendChild
```

## 🔧 Specifications

- [specifications.md](./specifications.md)
- [tokens.md](./tokens.md)
- [nodes.md](./nodes.md)
