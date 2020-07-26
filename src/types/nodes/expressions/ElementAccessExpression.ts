import { NodeBase } from '../..'
import { Expression } from '../Expression'

/**
 * ElementAccessExpression type.
 */
export type ElementAccessExpression = NodeBase<'element_access_expression'> & {
  /**
   * Expression node.
   */
  expression: Expression

  /**
   * Index node.
   */
  index: Expression
}
