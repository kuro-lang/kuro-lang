import { ExpressionNodeBase, Expression } from '../..'
import { Identifier } from './Identifier'

/**
 * PropertyAccessExpression type.
 */
export type PropertyAccessExpression = ExpressionNodeBase<
  'property_access_expression'
> & {
  /**
   * Expression.
   */
  expression: Expression

  /**
   * Identifier.
   */
  identifier: Identifier
}
