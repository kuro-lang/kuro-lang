import { ExpressionNodeBase, Expression } from '../..'

/**
 * BreakStatement type.
 */
export type BreakStatement = ExpressionNodeBase<'break_statement'> & {
  /**
   * Expression.
   */
  expression?: Expression
}
