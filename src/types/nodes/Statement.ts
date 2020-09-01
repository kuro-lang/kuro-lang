import { ExpressionStatement } from '.'
import { LetStatement, ConstStatement, ReturnStatement } from './statements'

/**
 * Statement type.
 */
export type Statement =
  | ConstStatement
  | ExpressionStatement
  | LetStatement
  | ReturnStatement
