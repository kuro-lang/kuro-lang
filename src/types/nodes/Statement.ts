import { ExpressionStatement } from '.'
import { LetStatement, ConstStatement } from './statements'

/**
 * Statement type.
 */
export type Statement = ConstStatement | ExpressionStatement | LetStatement
