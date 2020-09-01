import { Identifier } from '.'
import {
  BinaryExpression,
  PrefixExpression,
  IfExpression,
  WhileExpression,
  NumericLiteral,
  StringLiteral,
  BooleanLiteral,
} from './expressions'

/**
 * Expression type.
 */
export type Expression =
  | BinaryExpression
  | BooleanLiteral
  | Identifier
  | IfExpression
  | NumericLiteral
  | PrefixExpression
  | StringLiteral
  | WhileExpression
