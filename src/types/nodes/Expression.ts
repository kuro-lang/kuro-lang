import { Identifier } from '.'
import { BinaryExpression, PrefixExpression } from './expressions'

/**
 * Expression type.
 */
export type Expression = BinaryExpression | Identifier | PrefixExpression
