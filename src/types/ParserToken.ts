/**
 * ParserToken.
 */
export const ParserToken = {
  /**
   * AtomParser token.
   *
   * Parse
   * - `<literal_expression>`
   * - `(<expression>)`
   */
  Atom: Symbol('Atom'),

  /**
   * AssignParser token.
   *
   * Parse
   * - `<expression> = <expression>`
   */
  Assign: Symbol('Assign'),

  /**
   * OrParser token.
   *
   * Parse
   * - `<expression> || <expression>`
   */
  Or: Symbol('Or'),

  /**
   * AndExpressinParser token.
   *
   * Parse
   * - `<expression> && <expression>`
   */
  And: Symbol('And'),

  /**
   * EquivalentParser token.
   *
   * Parse
   * - `<expression> == <expression>`
   * - `<expression> != <expression>`
   */
  Equivalent: Symbol('Equivalent'),

  /**
   * ComparisonParser token.
   *
   * Parse
   * - `<expression> < <expression>`
   * - `<expression> <= <expression>`
   * - `<expression> > <expression>`
   * - `<expression> >= <expression>`
   */
  Comparison: Symbol('Comparison'),

  /**
   * AdditionAndSubtractionParser token.
   *
   * Parse
   * - `<expression> + <expression>`
   * - `<expression> - <expression>`
   */
  AdditionAndSubtraction: Symbol('AdditionAndSubtraction'),

  /**
   * MultiplicationAndDivisionParser token.
   *
   * Parse
   * - `<expression> * <expression>`
   * - `<expression> / <expression>`
   */
  MultiplicationAndDivisionSurplus: Symbol('MultiplicationAndDivisionSurplus'),

  /**
   * PowerParser token.
   *
   * Parse
   * - `<expression> ** <expression>`
   */
  Power: Symbol('Power'),

  /**
   * NotAndUnaryPlusAndUnaryMinusAndPrefixIncrementAndPrefixDecrementParser token.
   *
   * Parse
   * - `! <expression>`
   * - `+ <expression>`
   * - `- <expression>`
   * - `++ <expression>`
   * - `-- <expression>`
   */
  NotAndUnaryPlusAndUnaryMinusAndPrefixIncrementAndPrefixDecrement: Symbol(
    'NotAndUnaryPlusAndUnaryMinusAndPrefixIncrementAndPrefixDecrement'
  ),

  /**
   * PostIncrementAndPostDecrementParser token.
   *
   * Parse
   * - `<expression> ++`
   * - `<expression> --`
   */
  PostIncrementAndPostDecrement: Symbol('PostIncrementAndPostDecrement'),

  /**
   * PropertyAccessAndElementAccessAndFunctionCallParser token.
   *
   * Parse
   * - `<expression>.<expression>`
   * - `<expression>[<expression>]`
   * - `<expression> (<expression>, <expressions>...)`
   */
  PropertyAccessAndElementAccessAndFunctionCall: Symbol(
    'PropertyAccessAndElementAccessAndFunctionCall'
  ),

  /**
   * GroupParser token.
   *
   * - `( <expression> )`
   */
  Group: Symbol('Group'),

  /**
   * GroupAndBlockAndControlsParser token.
   *
   * Parse
   * - `( <expression> )`
   * - `{ <statement>... }`
   * - `if <expression> <BlockExpression> <else <IfExpression | BlockExpression>?>`
   * - `while <expression> <BlockExpression>`
   * - `for <expression> in <expression> <BlockExpression>`
   * - `loop <expression> <BlockExpression must includes <BreakStatement>>`
   */
  GroupAndBlockAndControls: Symbol('GroupAndBlockAndControls'),

  /**
   * ExpressionsParser token.
   *
   * - `<expression>`
   */
  Expressions: Symbol('Expressions'),

  /**
   * StatementsParser token.
   *
   * Parse
   * - `break <expression?>`
   * - `continue`
   * - `<expression>` (ExpressionStatement)
   */
  Statements: Symbol('Statements'),
} as const
