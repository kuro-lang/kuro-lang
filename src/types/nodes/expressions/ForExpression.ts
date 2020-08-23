import { NodeBase } from '../..'
import { Expression } from '../Expression'
import { InToken } from '../../tokens'
import { Identifier } from '../Identifier'
import { BlockExpression } from './BlockExpression'

/**
 * ForExpression type.
 */
export type ForExpression = NodeBase<'for_expression'> & {
  /**
   * Variable identifier node.
   */
  variable: Identifier

  /**
   * In token.
   */
  inToken: InToken

  /**
   * Expression node.
   */
  expression: Expression

  /**
   * Statement node.
   */
  statement: BlockExpression
}
