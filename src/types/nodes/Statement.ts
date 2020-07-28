import {
  VariableDeclarationStatement,
  BlockStatemenet,
  BreakStatement,
  ContinueStatement,
} from './statements'

/**
 * Statement type.
 */
export type Statement =
  | BlockStatemenet
  | BreakStatement
  | ContinueStatement
  | VariableDeclarationStatement
