/**
 * ParserToken.
 */
export const ParserToken = {
  /**
   * ProgramParser token.
   *
   * Parse
   * - `<statement>...`
   */
  Program: Symbol('Program'),

  /**
   * StatementsParser token.
   *
   * Parse
   * - `<expression>`
   * - `break <expression>`
   * - `continue`
   * - `{ <expression>... }`
   * - `let <identifier> = <expression>`
   * - `const <identifier> = <expression>`
   */
  Statements: Symbol('Statements'),

  /**
   * ExpressionsParser token.
   *
   * Parse
   * - `<expression>`
   */
  Expressions: Symbol('Expressions'),

  /**
   * AssignParser token.
   *
   * Parse
   * - `<expression> = <expression>`
   * - `<expression> += <expression>`
   * - `<expression> -= <expression>`
   * - `<expression> *= <expression>`
   * - `<expression> **= <expression>`
   * - `<expression> /= <expression>`
   * - `<expression> %= <expression>`
   */
  Assign: Symbol('Assign'),

  /**
   * AndParser token.
   *
   * Parse
   * - `<expression> && <expression>`
   */
  And: Symbol('And'),

  /**
   * OrParser token.
   *
   * Parse
   * - `<expression> || <expression>`
   */
  Or: Symbol('Or'),

  /**
   * EquivalentParser token.
   *
   * Parse
   * - `<expression> == <expression>`
   * - `<expression> != <expression>`
   */
  Equivalent: Symbol('Equivalent'),

  /**
   * ComparsionParser token.
   *
   * Parse
   * - `<expression> < <expression>`
   * - `<expression> <= <expression>`
   * - `<expression> > <expression>`
   * - `<expression> >= <expression>`
   */
  Comparsion: Symbol('Comparsion'),

  /**
   * AddAndSubParser token.
   *
   * Parse
   * - `<expression> + <expression>`
   * - `<expression> - <expression>`
   */
  AddAndSub: Symbol('AddAndSub'),

  /**
   * MulAndDivAndSurplusParser token.
   *
   * Parse
   * - `<expression> * <expression>`
   * - `<expression> / <expression>`
   * - `<expression> % <expression>`
   */
  MulAndDivAndSurplus: Symbol('MulAndDivAndSurplus'),

  /**
   * PowerParser totken.
   *
   * Parse
   * - `<expression> ** <expression>`
   */
  Power: Symbol('Power'),

  /**
   * PrefixParser token.
   *
   * Parse
   * - `! <expression>`
   * - `+ <expression>`
   * - `- <expression>`
   */
  Prefix: Symbol('Prefix'),

  /**
   * CallParser token.
   *
   * Parse
   * - `<expression> (<expression>...)`
   */
  Call: Symbol('Call'),

  /**
   * GroupParser token.
   *
   * Parse
   * - `( <expression> )`
   */
  Group: Symbol('Group'),

  /**
   * AtomParser token.
   *
   * Parse
   * - `<literals>`
   */
  Atom: Symbol('Atom'),
} as const
