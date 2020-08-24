import { NodeBase } from '../..'
import { Expression } from '../Expression'
import { Token } from '../../Token'

/**
 * PostfixUnaryExpression type.
 */
export type PostfixUnaryExpression = NodeBase<'postfix_unary_expression'> & {
  /**
   * Operator token.
   */
  operator: Token

  /**
   * Operand expression node.
   */
  operand: Expression
}
