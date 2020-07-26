import { NodeBase } from '../..'
import { Expression } from '../Expression'
import { BlockStatemenet } from '../statements'

/**
 * IfExpression type.
 */
export type IfExpression = NodeBase<'if_expression'> & {
  /**
   * Condition expression node.
   */
  condition: Expression

  /**
   * Then node.
   */
  then: BlockStatemenet

  /**
   * Else node.
   */
  else?: IfExpression | BlockStatemenet
}
