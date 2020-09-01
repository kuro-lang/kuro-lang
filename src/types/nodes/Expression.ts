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
} from './expressions'

/**
 * Expression type.
 */
export type Expression =
  | BinaryExpression
  | BooleanLiteral
  | FunctionExpression
  | Identifier
  | IfExpression
  | NumericLiteral
  | PrefixExpression
  | StringLiteral
  | WhileExpression
