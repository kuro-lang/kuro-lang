import {
  BooleanLiteralToken,
  NumericLiteralToken,
  StringLiteralToken,
} from './literals'

/*
 * LiteralToken type.
 */
export type LiteralToken =
  | BooleanLiteralToken
  | NumericLiteralToken
  | StringLiteralToken
