import { ExpressionNodeBase } from '../..'
import { Expression } from '../Expression'
import { Token } from '../../Token'

/**
 * BinaryExpression type.
 */
export type BinaryExpression = ExpressionNodeBase<'binary_expression'> & {
  /**
   * Operator token.
   */
  operator: Token

  /**
   * Left operand.
   */
  left: Expression

  /**
   * Right operand.
   */
  right: Expression
}
