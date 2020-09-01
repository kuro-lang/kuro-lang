import { ExpressionNodeBase } from '../..'
import { Statement } from '../Statement'

/**
 * BlockStatement type.
 */
export type BlockStatement = ExpressionNodeBase<'block_statement'> & {
  /**
   * Statements.
   */
  statements: Statement[]
}
