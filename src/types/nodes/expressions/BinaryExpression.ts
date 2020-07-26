import { NodeBase } from '../..'
import { Token } from '../../Token'
import { Expression } from '../Expression'

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
