import { Identifier } from '.'
import {
  BinaryExpression,
  PrefixExpression,
  BlockExpression,
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
  | BlockExpression
  | BooleanLiteral
  | Identifier
  | IfExpression
  | NumericLiteral
  | PrefixExpression
  | StringLiteral
  | WhileExpression
