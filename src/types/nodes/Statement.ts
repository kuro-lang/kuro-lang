import {
  VariableDeclarationStatement,
  BreakStatement,
  ContinueStatement,
  ExpressionStatement,
} from './statements'

/**
 * Statement type.
 */
export type Statement =
  | BreakStatement
  | ContinueStatement
  | ExpressionStatement
  | VariableDeclarationStatement
