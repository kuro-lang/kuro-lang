import { NodeBase, Statement } from '..'

/**
 * Program type.
 */
export type Program = NodeBase<'program'> & {
  /**
   * Statements.
   */
  statements: Statement[]
}
