import { Token, IdentifierToken } from '../types'
import { isTokenKind } from './isTokenKind'

/**
 * Returns whether token is a IdentifierToken.
 *
 * @param token Token.
 */
export const isIdentifierToken = (token: Token): token is IdentifierToken => {
  return isTokenKind(token, ['identifier'])
}
