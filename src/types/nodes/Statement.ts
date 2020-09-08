import { ExpressionStatement } from '.'
import {
  LetStatement,
  ConstStatement,
  ReturnStatement,
  BreakStatement,
  ContinueStatement,
  BlockStatement,
  WhileStatement,
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
  | LetStatement
  | ReturnStatement
  | WhileStatement
