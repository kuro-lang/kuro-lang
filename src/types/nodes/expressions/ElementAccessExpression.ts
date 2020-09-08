import { ExpressionNodeBase } from '../..'
import { Expression } from '../Expression'

/**
 * ElementAccessExpression type.
 */
export type ElementAccessExpression = ExpressionNodeBase<
  'element_access_expression'
> & {
  /**
   * Expression.
   */
  expression: Expression

  /**
   * Index.
   */
  index: Expression
}
