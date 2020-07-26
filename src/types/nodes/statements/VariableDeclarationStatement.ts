import { NodeBase, Identifier, Expression } from '../..'

/**
 * VariableDeclarationStatement type.
 */
export type VariableDeclarationStatement = NodeBase<
  'variable_declaration_statement'
> & {
  /**
   * Identifier node.
   */
  name: Identifier

  /**
   * Expression node.
   */
  initializer: Expression
}
