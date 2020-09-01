# 🌴 Nodes

## 🔢 Expressions

- BinaryExpression
  - `<expression> <operator> <expression>`
- PrefixExpression
  - `<operator> <expression>`
- BlockExpression
  - `{ <expression...> }`
- IfExpression
  - `if <expression> <Block>`
- WhileExpression
  - `while <expression> <Block>`
- NumberLiteral
- StringLiteral
- BooleanLiteral
- FunctionLiteral
  - `fn (<Identifier>) <Block>`
- Identifier

## 📝 Statements

- LetStatement
  - `let <Identifier> = <expression>`
- ConstStatement
  - `const <Identifier> = <expression>`
- ReturnsStatement
  - `return <expression?>`
- BreakStatement
  - `break <expression?>`
- ContinueStatement
  - `continue`
