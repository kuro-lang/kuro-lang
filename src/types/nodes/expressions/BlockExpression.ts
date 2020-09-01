import { ExpressionNodeBase } from '../../ExpressionNodeBase'
import { Statement } from '../Statement'

/**
 * BlockExpression type.
 */
export type BlockExpression = ExpressionNodeBase<'block_expression'> & {
  /**
   * Statements.
   */
  statements: Statement[]
}
