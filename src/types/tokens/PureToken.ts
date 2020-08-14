import { SymbolToken, ReservedToken } from '.'
import { NewLineToken } from './NewLineToken'
import { EndOfFileToken } from './EndOfFileToken'

/*
 * PureToken type.
 */
export type PureToken =
  | EndOfFileToken
  | ReservedToken
  | SymbolToken
  | NewLineToken
