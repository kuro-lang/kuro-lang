import { ExpressionNodeBase } from '../../ExpressionNodeBase'
import { Expression } from '../Expression'

/**
 * CallExpression type.
 */
export type CallExpression = ExpressionNodeBase<'call_expression'> & {
  /**
   * Expression.
   */
  expression: Expression

  /**
   * Arguments.
   */
  arguments: Expression[]
}
