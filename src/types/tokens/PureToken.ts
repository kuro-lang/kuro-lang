import { SymbolToken, ReservedToken } from '.'
import { NewLineToken } from './NewLineToken'

/*
 * PureToken type.
 */
export type PureToken = ReservedToken | SymbolToken | NewLineToken
