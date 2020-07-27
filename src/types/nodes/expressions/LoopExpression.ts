import { NodeBase } from '../..'
import { BlockStatemenet } from '../statements'

/**
 * LoopExpression type.
 */
export type LoopExpression = NodeBase<'loop_expression'> & {
  /**
   * Statement node.
   */
  statement: BlockStatemenet
}
