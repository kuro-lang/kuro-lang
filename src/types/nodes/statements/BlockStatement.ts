import { NodeBase } from '../..'
import { Statement } from '../Statement'

/**
 * BlockStatement type.
 */
export type BlockStatemenet = NodeBase<'block_statement'> & {
  statements: Statement[]
}
