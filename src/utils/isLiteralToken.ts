import { Token, LiteralTokenKind, LiteralToken } from '../types'
import { isTokenKind } from './isTokenKind'

/**
 * Literal tokens kinds array.
 */
const literalKinds: LiteralTokenKind[] = [
  'boolean_literal',
  'numeric_literal',
  'string_literal',
]

/**
 * Returns whether token is a LiteralToken.
 *
 * @param token Token.
 */
export const isLiteralToken = (token: Token): token is LiteralToken => {
  return isTokenKind(token, literalKinds)
}
