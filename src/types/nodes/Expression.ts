import { Identifier } from '.'
import { BinaryExpression } from './expressions'

/**
 * Expression type.
 */
export type Expression = BinaryExpression | Identifier
