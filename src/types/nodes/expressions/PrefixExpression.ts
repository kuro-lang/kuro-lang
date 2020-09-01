import { ExpressionNodeBase, Token } from '../..'
import { Expression } from '../Expression'

/**
 * PrefixExpression type.
 */
export type PrefixExpression = ExpressionNodeBase<'prefix_expression'> & {
  /**
   * Operator token.
   */
  operator: Token

  /**
   * Right operand.
   */
  right: Expression
}
