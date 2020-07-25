import { LiteralNodeBase } from '../../..'
import { Expression } from '../../ExpressionNode'

/**
 * ArrayLiteralExpression type.
 */
export type ArrayLiteralExpression = LiteralNodeBase<
  'array_literal_expression',
  Expression[]
>
