import { NodeBase } from '../..'
import { Expression } from '../Expression'
import { BlockExpression } from './BlockExpression'

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
  then: BlockExpression

  /**
   * Else node.
   */
  else?: IfExpression | BlockExpression
}
