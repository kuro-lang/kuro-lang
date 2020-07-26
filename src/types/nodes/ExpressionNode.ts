import {
  LiteralExpression,
  PropertyAccessExpression,
  ElementAccessExpression,
  CallExpression,
} from './expressions'

/**
 * Expression type.
 */
export type Expression =
  | CallExpression
  | ElementAccessExpression
  | LiteralExpression
  | PropertyAccessExpression
