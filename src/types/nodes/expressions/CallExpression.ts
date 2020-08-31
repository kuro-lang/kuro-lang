import { NodeBase } from '../..'
import { Expression } from '../Expression'
import { Identifier } from '../Identifier'

/**
 * CallExpression type.
 */
export type CallExpression = NodeBase<'call_expression'> & {
  /**
   * Expression node.
   */
  expression: Expression | Identifier

  /**
   * Arguments nodes.
   */
  arguments: Expression[]
}
