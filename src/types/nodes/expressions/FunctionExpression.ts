import { NodeBase } from '../..'
import { Identifier } from '../Identifier'
import { Parameter } from '../Parameter'
import { BlockStatemenet } from '../statements'

/**
 * FunctionExpression type.
 */
export type FunctionExpression = NodeBase<'function_expression'> & {
  /**
   * Name node.
   */
  name: Identifier

  /**
   * Parameters nodes.
   */
  parameters: Parameter[]

  /**
   * Body node.
   */
  body: BlockStatemenet
}
