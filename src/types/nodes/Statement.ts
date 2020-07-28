import {
  VariableDeclarationStatement,
  BlockStatemenet,
  BreakStatement,
  ContinueStatement,
  ExpressionStatement,
} from './statements'

/**
 * Statement type.
 */
export type Statement =
  | BlockStatemenet
  | BreakStatement
  | ContinueStatement
  | ExpressionStatement
  | VariableDeclarationStatement
