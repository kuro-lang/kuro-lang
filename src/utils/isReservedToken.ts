import { Token, CommentToken, ReservedTokenKind } from '../types'
import { isTokenKind } from './isTokenKind'

/**
 * Reserved tokens kinds array.
 */
const reservedKinds: ReservedTokenKind[] = [
  'break',
  'const',
  'continue',
  'else',
  'fn',
  'for',
  'if',
  'in',
  'let',
  'loop',
  'while',
]

/**
 * Returns whether token is a ReservedToken.
 *
 * @param token Token.
 */
export const isReservedToken = (token: Token): token is CommentToken => {
  return isTokenKind(token, reservedKinds)
}
