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
  FunctionExpression,
  BlockExpression,
} from './expressions'

/**
 * Expression type.
 */
export type Expression =
  | BinaryExpression
  | BlockExpression
  | CallExpression
  | ElementAccessExpression
  | ForExpression
  | FunctionExpression
  | IfExpression
  | LiteralExpression
  | LoopExpression
  | PropertyAccessExpression
  | PrefixUnaryExpression
  | PostfixUnaryExpression
  | WhileExpression
