import { Identifier } from '.'
import {
  BinaryExpression,
  PrefixExpression,
  IfExpression,
  NumericLiteral,
  StringLiteral,
  BooleanLiteral,
  FunctionExpression,
  CallExpression,
  PropertyAccessExpression,
  ObjectLiteral,
  ArrayLiteral,
  ElementAccessExpression,
} from './expressions'

/**
 * Expression type.
 */
export type Expression =
  | ArrayLiteral
  | BinaryExpression
  | BooleanLiteral
  | CallExpression
  | ElementAccessExpression
  | FunctionExpression
  | Identifier
  | IfExpression
  | NumericLiteral
  | ObjectLiteral
  | PrefixExpression
  | PropertyAccessExpression
  | StringLiteral
