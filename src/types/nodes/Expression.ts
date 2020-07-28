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
  ForExpression,
} from './expressions'

/**
 * Expression type.
 */
export type Expression =
  | BinaryExpression
  | CallExpression
  | ElementAccessExpression
  | ForExpression
  | IfExpression
  | LiteralExpression
  | LoopExpression
  | PropertyAccessExpression
  | PrefixUnaryExpression
  | PostfixUnaryExpression
  | WhileExpression
