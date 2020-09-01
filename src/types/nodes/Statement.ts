import { ExpressionStatement } from '.'
import { LetStatement } from './statements'

/**
 * Statement type.
 */
export type Statement = ExpressionStatement | LetStatement
