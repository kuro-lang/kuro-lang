import { Token } from '../types'
import { useEquals } from './useEquals'

/**
 * Returns whether kinds includes `token.kind`.
 *
 * @param token Token.
 * @param kinds Token kinds array.
 */
export const isTokenKind = <K extends Token['kind'][]>(
  token: Token,
  kinds: K
): boolean => !!kinds.find(useEquals(token.kind))
