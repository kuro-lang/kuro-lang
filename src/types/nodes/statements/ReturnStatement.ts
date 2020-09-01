import { StatementNodeBase } from '../..'
import { Expression } from '../Expression'

/**
 * ReturnStatement type.
 */
export type ReturnStatement = StatementNodeBase<'return_statement'> & {
  /**
   * Expression.
   */
  expression?: Expression
}
