import { NumericLiteralExpression } from '.'
import {
  StringLiteralExpression,
  BooleanLiteralExpression,
  ArrayLiteralExpression,
  ObjectLiteralExpression,
} from './literals'

/**
 * LiteralExpression type.
 */
export type LiteralExpression =
  | ArrayLiteralExpression
  | BooleanLiteralExpression
  | NumericLiteralExpression
  | ObjectLiteralExpression
  | StringLiteralExpression
