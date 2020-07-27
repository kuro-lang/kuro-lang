import {
  LiteralExpression,
  PropertyAccessExpression,
  ElementAccessExpression,
  CallExpression,
  BinaryExpression,
  IfExpression,
  LoopExpression,
  PrefixUnaryExpression,
  PostfixUnaryExpression,
  WhileExpression,
} from './expressions'

/**
 * Expression type.
 */
export type Expression =
  | BinaryExpression
  | CallExpression
  | ElementAccessExpression
  | IfExpression
  | LiteralExpression
  | LoopExpression
  | PropertyAccessExpression
  | PrefixUnaryExpression
  | PostfixUnaryExpression
  | WhileExpression
