import { LiteralExpression, PropertyAccessExpression } from './expressions'

/**
 * Expression type.
 */
export type Expression = LiteralExpression | PropertyAccessExpression
