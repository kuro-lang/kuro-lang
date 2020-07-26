import { NodeBase } from '../..'
import { Expression } from '../ExpressionNode'
import { Token } from '../../Token'

/**
 * PostfixUnaryExpression type.
 */
export type PostfixUnaryExpression = NodeBase<'prefix_unary_expression'> & {
  /**
   * Operator token.
   */
  operator: Token

  /**
   * Operand expression node.
   */
  operand: Expression
}
