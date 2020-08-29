# Kuro-lang

## Features list

- Comments
- Numeric literals
- String literals
- Template literals
- Boolean literals
- Object literals
- Array literals
- Label literals
- Enum literals
- Basic expressions
- Assignment expression
- Match statement
- Variable declaration
- Function declaration
- Interface declaration
- Class declaration
- Block scope
- Module systems
- Errors

## Comments

### Inline comments

Inline comments starts with slash-slash or shape symbol.

```plain
// This is a comment.
# This is a comment too.
```

### Block comments

Block comments are enclosed in `/*` and `*/`.

```plain
/*
This
is a
block
c
o
m
m
e
n
t
*/
```

## Numeric literals

### Decimal number literal

```plain
10
-10
1024
```

### Binary number literal

Binary number literals will be convert to decimal number.

```plain
0b11111 // 31
```

### Hexadecimal number literal

Hexadecimal number literals will be convert to decimal number.

```plain
0xff // 255
```

## String literals

### Basic string literals

String literals are enclosed `"` or `'`.

```plain
"This is a string literal."
'This is a string literal too.'
```

String literals can't contain new-line chars without escapes.

```plain
"String // unterminated string literal.
literal
"
```

String literals can contain escaped char with `\`.

```plain
"The program says \"Hello world\"."
"Multi\
line\
string\
literal"
```

## Template string literals

Template string literals can contain expression.

```plain
var name = 'world'
`Hello ${name}` // Hello world
```

## Boolean literals

Boolean Literal is expressed as `true` and `false`.

```plain
true
false
```

Boolean literal is not a variable.

```plain
true = 1 // Error 1 is not assignable to `true`. because `true` is not a variable.
```

## Object literals

```plain
var user = {
  name: "hota1024",
  age: 16,
  favorites: [
    {
      "type": #Animal,
      "name": "Cat",
    },
    {
      "type": #Food,
      "name": "Curry",
    },
  ],
}

user                   // object { ... }
user.name              // "hota1024"
user.age               // 16
user.favorites[0].type // #Animal
user.favorites[0].name // Cat
user.favorites[1].type // #Food
user.favorites[1].name // Curry
```

## Array literals

```plain
var languages = ["C++", "TypeScript", "Scratch"]

languages // array [...]
languages[0]
```

## Basic expressions

### Pipe

```plain
a -> b
```

### Addition

```plain
a + b
```

### Subtraction

```plain
a - b
```

### Multiplication

```plain
a * b
```

### Power

```plain
a ** b
```

### Division

```plain
a / b
```

### Surplus

```plain
a % b
```

### Or

```plain
a || b
```

### And

```plain
a && b
```

### Not

```plain
!a
```

### Greater than

```plain
a > b // Whether a is greater than b
```

### Less than

```plain
a < b // Whether a is less than b
```

### Greater equals than

```plain
a >= b // Whether a is equals b or a is greater than b
```

### Less equals than

```plain
a <= b // Whether a is equals b or a is greater than b
```

### If

```plain
const age = 20

const message = if age >= 20 {
  "Adult"
} else {
  "Child"
}

message // message is "Adult"
```

```plain
const num = 15

const message = if num % 15 === 0 {
  "FizzBuzz"
} else if num % 5 === 0 {
  "Buzz"
} else if num % 3 === 0 {
  "Fizz"
} else {
  num
}

message // message is "FizzBuzz"
```

## Assignment expressions

### Addition and Assignment

```plain
a += b
```

### Subtraction and Assignment

```plain
a -= b
```

### Multiplication and Assignment

```plain
a *= b
```

### Power and Assignment

```plain
a **= b
```

### Division and Assignment

```plain
a /= b
```

### Surplus and Assignment

```plain
a %= b
```

## Variable declaration

### Mutable variable declaration

Declaration mutable variable without initialization expression.

```plain
var a
```

Declaration mutable variable with initialization expression.

```plain
var a = 2 ** 10
```

Mutable variables cannot be redeclared.

```plain
var animal = "Cat"
var animal = "Dog" // Error cannot redeclare block-scoped variable 'animal'.
```

### Immutable variable declaration

Declaration immutable variable.

```plain
const PI = 3.14
```

Declaration of immutable variable must have initialization expression.

```plain
const PI // Error `const` declarations must be initialized.
```
