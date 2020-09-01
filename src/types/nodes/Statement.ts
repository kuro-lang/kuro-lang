import { ExpressionStatement } from '.'
import {
  LetStatement,
  ConstStatement,
  ReturnStatement,
  BreakStatement,
} from './statements'

/**
 * Statement type.
 */
export type Statement =
  | BreakStatement
  | ConstStatement
  | ExpressionStatement
  | LetStatement
  | ReturnStatement
