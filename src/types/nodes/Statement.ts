import { ExpressionStatement } from '.'
import {
  LetStatement,
  ConstStatement,
  ReturnStatement,
  BreakStatement,
  ContinueStatement,
  BlockStatement,
  WhileStatement,
  IncaseStatement,
} from './statements'

/**
 * Statement type.
 */
export type Statement =
  | BlockStatement
  | BreakStatement
  | ConstStatement
  | ContinueStatement
  | ExpressionStatement
  | IncaseStatement
  | LetStatement
  | ReturnStatement
  | WhileStatement
