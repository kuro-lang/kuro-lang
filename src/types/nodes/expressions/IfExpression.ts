import { ExpressionNodeBase, Expression } from '../..'
import { BlockStatement } from '../statements'

/**
 * IfExpression type.
 */
export type IfExpression = ExpressionNodeBase<'if_expression'> & {
  /**
   * Condition.
   */
  condition: Expression

  /**
   * Then statement.
   */
  then: BlockStatement

  /**
   * Else expression.
   */
  else?: IfExpression | BlockStatement
}
