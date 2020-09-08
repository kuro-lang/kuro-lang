import { ExpressionNodeBase, Expression } from '../..'
import { BlockStatement } from '../statements'

/**
 * IncaseStatement type.
 */
export type IncaseStatement = ExpressionNodeBase<'incase_statement'> & {
  /**
   * Condition.
   */
  condition: Expression

  /**
   * Then statement.
   */
  then: BlockStatement

  /**
   * Else statement.
   */
  else?: IncaseStatement | BlockStatement
}
