import { StatementNodeBase } from '../..'
import { Expression } from '../Expression'

/**
 * ExpressionStatement type.
 */
export type ExpressionStatement = StatementNodeBase<'expression_statement'> & {
  /**
   * Expression.
   */
  expression: Expression
}
