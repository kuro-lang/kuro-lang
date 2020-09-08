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
} from './expressions'

/**
 * Expression type.
 */
export type Expression =
  | BinaryExpression
  | BooleanLiteral
  | CallExpression
  | FunctionExpression
  | Identifier
  | IfExpression
  | NumericLiteral
  | ObjectLiteral
  | PrefixExpression
  | PropertyAccessExpression
  | StringLiteral
