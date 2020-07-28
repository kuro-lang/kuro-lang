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
} from './expressions'

/**
 * Expression type.
 */
export type Expression =
  | BinaryExpression
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
