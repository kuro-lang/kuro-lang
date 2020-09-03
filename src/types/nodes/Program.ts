import { NodeBase, Statement } from '..'
import { SourceCode } from '../SourceCode'

/**
 * Program type.
 */
export type Program = NodeBase<'program'> & {
  /**
   * SourceCode object.
   */
  source: SourceCode

  /**
   * Statements.
   */
  statements: Statement[]
}
