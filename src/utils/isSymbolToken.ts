import { Token, SymbolTokenKind, SymbolToken } from '../types'
import { isTokenKind } from './isTokenKind'

/**
 * Symbol tokens kinds array.
 */
const symbolKinds: SymbolTokenKind[] = [
  'asterisk',
  'asterisk_asterisk',
  'asterisk_asterisk_equals',
  'asterisk_equals',
  'colon',
  'comma',
  'dot',
  'dot_dot',
  'equals',
  'equals_equals',
  'exclamation_equals',
  'greater_equals_than',
  'greater_than',
  'left_brace',
  'left_bracket',
  'left_paren',
  'less_equals_than',
  'less_than',
  'minus',
  'minus_equals',
  'minus_minus',
  'percent',
  'percent_equals',
  'plus',
  'plus_equals',
  'plus_plus',
  'question',
  'right_brace',
  'right_bracket',
  'right_paren',
  'slash',
  'slash_equals',
]

/**
 * Returns whether token is a SymbolToken.
 *
 * @param token Token.
 */
export const isSymbolToken = (token: Token): token is SymbolToken => {
  return isTokenKind(token, symbolKinds)
}
