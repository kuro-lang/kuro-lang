import {
  LiteralExpression,
  PropertyAccessExpression,
  ElementAccessExpression,
} from './expressions'

/**
 * Expression type.
 */
export type Expression =
  | ElementAccessExpression
  | LiteralExpression
  | PropertyAccessExpression
