import { NumericLiteralExpression } from '.'
import { StringLiteralExpression, BooleanLiteralExpression } from './literals'

/**
 * LiteralExpression type.
 */
export type LiteralExpression =
  | BooleanLiteralExpression
  | NumericLiteralExpression
  | StringLiteralExpression
