import { ExpressionStatement } from '.'
import {
  LetStatement,
  ConstStatement,
  ReturnStatement,
  BreakStatement,
  ContinueStatement,
} from './statements'

/**
 * Statement type.
 */
export type Statement =
  | BreakStatement
  | ConstStatement
  | ContinueStatement
  | ExpressionStatement
  | LetStatement
  | ReturnStatement
