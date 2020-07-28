import { NodeBase } from '../..'
import { Expression } from '../Expression'
import { BlockStatemenet } from '../statements'
import { InToken } from '../../tokens'
import { Identifier } from '../Identifier'

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
  statement: BlockStatemenet
}
