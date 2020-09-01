import { Identifier } from '.'
import {
  BinaryExpression,
  PrefixExpression,
  BlockExpression,
  IfExpression,
  WhileExpression,
  NumericLiteral,
  StringLiteral,
} from './expressions'

/**
 * Expression type.
 */
export type Expression =
  | BinaryExpression
  | BlockExpression
  | Identifier
  | IfExpression
  | NumericLiteral
  | PrefixExpression
  | StringLiteral
  | WhileExpression
