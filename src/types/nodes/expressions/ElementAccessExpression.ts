import { NodeBase } from '../..'
import { Expression } from '../ExpressionNode'

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
