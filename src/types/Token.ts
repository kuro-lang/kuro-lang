import {
  CommentToken,
  LiteralToken,
  ReservedToken,
  SymbolToken,
  IdentifierToken,
} from './tokens'

/*
 * Token type.
 */
export type Token =
  | CommentToken
  | IdentifierToken
  | LiteralToken
  | ReservedToken
  | SymbolToken
