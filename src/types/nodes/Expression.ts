import { Identifier } from '.'
import {
  BinaryExpression,
  PrefixExpression,
  BlockExpression,
  IfExpression,
  WhileExpression,
} from './expressions'

/**
 * Expression type.
 */
export type Expression =
  | BinaryExpression
  | BlockExpression
  | Identifier
  | IfExpression
  | PrefixExpression
  | WhileExpression
