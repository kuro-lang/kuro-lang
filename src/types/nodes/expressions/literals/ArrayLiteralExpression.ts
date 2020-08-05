import { LiteralNodeBase, Expression } from '../../..'

/**
 * ArrayLiteralExpression type.
 */
export type ArrayLiteralExpression = LiteralNodeBase<
  'array_literal_expression',
  Expression[]
>
