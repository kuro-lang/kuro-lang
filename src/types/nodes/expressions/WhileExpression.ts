import { ExpressionNodeBase } from '../..'
import { Expression } from '../Expression'
import { BlockExpression } from './BlockExpression'

/**
 * WhileExpression type.
 */
export type WhileExpression = ExpressionNodeBase<'while_expression'> & {
  /**
   * Condition expression.
   */
  condition: Expression

  /**
   * Expression.
   */
  expression: BlockExpression
}
