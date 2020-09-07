import { Identifier } from '.'
import {
  BinaryExpression,
  PrefixExpression,
  IfExpression,
  WhileExpression,
  NumericLiteral,
  StringLiteral,
  BooleanLiteral,
  FunctionExpression,
  CallExpression,
  PropertyAccessExpression,
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
  | PrefixExpression
  | PropertyAccessExpression
  | StringLiteral
  | WhileExpression
