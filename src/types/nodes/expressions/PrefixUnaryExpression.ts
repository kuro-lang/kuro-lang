import { NodeBase } from '../..'
import { Expression } from '../Expression'
import { Token } from '../../Token'

/**
 * PrefixUnaryExpression type.
 */
export type PrefixUnaryExpression = NodeBase<'prefix_unary_expression'> & {
  /**
   * Operator token.
   */
  operator: Token

  /**
   * Operand expression node.
   */
  operand: Expression
}
