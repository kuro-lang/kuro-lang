import { CommentTokenKind } from './CommentTokenKind'
import { LiteralTokenKind } from './LiteralTokenKind'
import { ReservedTokenKind } from './ReservedTokenKind'
import { SymbolTokenKind } from './SymbolTokenKind'

/*
 * TokenKind type.
 */
export type TokenKind =
  | CommentTokenKind
  | LiteralTokenKind
  | ReservedTokenKind
  | SymbolTokenKind
