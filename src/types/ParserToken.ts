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
   * AssignExpressionParser token.
   *
   * Parse
   * - `<expression> = <expression>`
   */
  AssignExpression: Symbol('AssignExpression'),

  /**
   * OrExpressionParser token.
   *
   * Parse
   * - `<expression> || <expression>`
   */
  OrExpression: Symbol('LogicalOrExpression'),

  /**
   * AndExpressinParser token.
   *
   * Parse
   * - `<expression> && <expression>`
   */
  AndExpression: Symbol('LogicalAndExpression'),

  /**
   * EquivalentExpressionParser token.
   *
   * Parse
   * - `<expression> == <expression>`
   * - `<expression> != <expression>`
   */
  EquivalentExpression: Symbol('LogicalEquivalentExpression'),

  /**
   * ComparisonExpressionParser token.
   *
   * Parse
   * - `<expression> < <expression>`
   * - `<expression> <= <expression>`
   * - `<expression> > <expression>`
   * - `<expression> >= <expression>`
   */
  ComparisonExpression: Symbol('ComparisonExpression'),
} as const
