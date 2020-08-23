import { NodeBase } from '../..'
import { Expression } from '../Expression'
import { BlockExpression } from './BlockExpression'

/**
 * WhileExpression type.
 */
export type WhileExpression = NodeBase<'while_expression'> & {
  /**
   * Condition expression node.
   */
  condition: Expression

  /**
   * Statement node.
   */
  statement: BlockExpression
}
