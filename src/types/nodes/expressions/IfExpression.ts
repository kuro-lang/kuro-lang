import { ExpressionNodeBase, Expression, BlockExpression } from '../..'

/**
 * IfExpression type.
 */
export type IfExpression = ExpressionNodeBase<'if_expression'> & {
  /**
   * Condition.
   */
  condition: Expression

  /**
   * Then expression.
   */
  then: BlockExpression

  /**
   * Else expression.
   */
  else?: IfExpression | BlockExpression
}
