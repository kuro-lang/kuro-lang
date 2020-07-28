import {
  VariableDeclarationStatement,
  BlockStatemenet,
  BreakStatement,
} from './statements'

/**
 * Statement type.
 */
export type Statement =
  | BlockStatemenet
  | BreakStatement
  | VariableDeclarationStatement
