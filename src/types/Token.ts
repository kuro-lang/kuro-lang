import {
  CommentToken,
  LiteralToken,
  ReservedToken,
  SymbolToken,
} from './tokens'

/*
 * Token type.
 */
export type Token = CommentToken | LiteralToken | ReservedToken | SymbolToken
