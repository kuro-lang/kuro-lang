import { NodeBase } from '../..'
import { Statement } from '../Statement'

/**
 * BlockExpression type.
 */
export type BlockExpression = NodeBase<'block_expression'> & {
  statements: Statement[]
}
