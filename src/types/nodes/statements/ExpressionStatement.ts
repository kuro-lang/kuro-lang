import { NodeBase, Expression } from '../..'

/**
 * ExpressionStatement type.
 */
export type ExpressionStatement = NodeBase<'expression_statement'> & {
  /**
   * Expression node.
   */
  expression: Expression
}
