import { NodeBase } from '../..'
import { Expression } from '../Expression'
import { BlockStatemenet } from '../statements'

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
  statement: BlockStatemenet
}
