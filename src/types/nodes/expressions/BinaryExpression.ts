import { NodeBase } from '../..'
import { PureToken } from '../../tokens'
import { Node } from '../../Node'

/**
 * BinaryExpression type.
 */
export type BinaryExpression = NodeBase<'binary_expression'> & {
  /**
   * Operator token.
   */
  operator: PureToken

  /**
   * Left expression node.
   */
  left: Node

  /**
   * Right expression node.
   */
  right: Node
}
