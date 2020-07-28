import {
  CommentToken,
  LiteralToken,
  ReservedToken,
  SymbolToken,
  IdentifierToken,
  NewLineToken,
} from './tokens'

/*
 * Token type.
 */
export type Token =
  | CommentToken
  | IdentifierToken
  | LiteralToken
  | NewLineToken
  | ReservedToken
  | SymbolToken
