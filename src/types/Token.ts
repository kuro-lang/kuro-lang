import {
  CommentToken,
  LiteralToken,
  ReservedToken,
  SymbolToken,
  IdentifierToken,
  NewLineToken,
  EndOfFileToken,
} from './tokens'

/*
 * Token type.
 */
export type Token =
  | CommentToken
  | EndOfFileToken
  | IdentifierToken
  | LiteralToken
  | NewLineToken
  | ReservedToken
  | SymbolToken
