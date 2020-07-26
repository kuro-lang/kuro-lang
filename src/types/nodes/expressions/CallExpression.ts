import { NodeBase } from '../..'
import { Expression } from '../Expression'

/**
 * CallExpression type.
 */
export type CallExpression = NodeBase<'call_expression'> & {
  /**
   * Expression node.
   */
  expression: Expression

  /**
   * Arguments nodes.
   */
  arguments: Expression[]
}
