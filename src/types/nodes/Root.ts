import { NodeBase, Statement } from '..'

/**
 * Root type.
 */
export type Root = NodeBase<'root'> & {
  /**
   * Statements nodes.
   */
  statements: Statement[]
}
