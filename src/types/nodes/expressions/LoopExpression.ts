import { NodeBase } from '../..'
import { BlockExpression } from './BlockExpression'

/**
 * LoopExpression type.
 */
export type LoopExpression = NodeBase<'loop_expression'> & {
  /**
   * Statement node.
   */
  statement: BlockExpression
}
