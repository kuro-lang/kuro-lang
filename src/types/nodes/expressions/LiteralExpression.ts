import { NumericLiteralExpression } from '.'
import {
  StringLiteralExpression,
  BooleanLiteralExpression,
  ArrayLiteralExpression,
} from './literals'

/**
 * LiteralExpression type.
 */
export type LiteralExpression =
  | ArrayLiteralExpression
  | BooleanLiteralExpression
  | NumericLiteralExpression
  | StringLiteralExpression
