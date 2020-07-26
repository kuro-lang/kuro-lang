import { NodeBase, Expression, Identifier } from '../..'

/**
 * PropertyAccessExpression type.
 */
export type PropertyAccessExpression = NodeBase<
  'property_access_expression'
> & {
  /**
   * Expression node.
   */
  expression: Expression

  /**
   * Identifier node.
   */
  identifier: Identifier
}
