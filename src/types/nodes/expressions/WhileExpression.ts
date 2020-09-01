import { ExpressionNodeBase, BlockStatement } from '../..'
import { Expression } from '../Expression'

/**
 * WhileExpression type.
 */
export type WhileExpression = ExpressionNodeBase<'while_expression'> & {
  /**
   * Condition expression.
   */
  condition: Expression

  /**
   * Statement.
   */
  statement: BlockStatement
}
