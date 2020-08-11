import { NodeBase } from '../..'
import { Expression } from '../Expression'
import { Token } from '../../Token'

/**
 * BinaryExpression type.
 */
export type BinaryExpression = NodeBase<'binary_expression'> & {
  /**
   * Operator token.
   */
  operator: Token

  /**
   * Left expression node.
   */
  left: Expression

  /**
   * Right expression node.
   */
  right: Expression
}
