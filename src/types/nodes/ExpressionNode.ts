import {
  LiteralExpression,
  PropertyAccessExpression,
  ElementAccessExpression,
  CallExpression,
  BinaryExpression,
} from './expressions'

/**
 * Expression type.
 */
export type Expression =
  | BinaryExpression
  | CallExpression
  | ElementAccessExpression
  | LiteralExpression
  | PropertyAccessExpression
