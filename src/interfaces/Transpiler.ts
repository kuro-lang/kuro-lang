import { Node } from '../types'

/**
 * Transpiler interface.
 */
export interface ITranspiler {
  /**
   * Transpile given AST node.
   *
   * @param node AST Node.
   */
  transpile(node: Node): string
}
