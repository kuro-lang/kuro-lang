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
  Or: Symbol('LogicalOr'),

  /**
   * AndExpressinParser token.
   *
   * Parse
   * - `<expression> && <expression>`
   */
  And: Symbol('LogicalAnd'),

  /**
   * EquivalentParser token.
   *
   * Parse
   * - `<expression> == <expression>`
   * - `<expression> != <expression>`
   */
  Equivalent: Symbol('LogicalEquivalent'),

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
   * FunctionCallParser token.
   *
   * - `<expression> (<expression>, <expressions>...)`
   */
  FunctionCall: Symbol('FunctionCall'),
} as const
