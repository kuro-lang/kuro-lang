import { Identifier } from '.'
import {
  BinaryExpression,
  PrefixExpression,
  BlockExpression,
  IfExpression,
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
