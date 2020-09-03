import {
  AsteriskAsteriskEqualsToken,
  AsteriskAsteriskToken,
  AsteriskEqualsToken,
  AsteriskToken,
  ColonToken,
  CommaToken,
  DotDotToken,
  DotToken,
  EqualsEqualsToken,
  EqualsToken,
  ExclamationEqualsToken,
  GreaterEqualsThanToken,
  GreaterThanToken,
  LeftBraceToken,
  LeftBracketToken,
  LeftParenToken,
  LessEqualsThanToken,
  LessThanToken,
  MinusEqualsToken,
  MinusMinusToken,
  MinusToken,
  PercentEqualsToken,
  PercentToken,
  PlusEqualsToken,
  PlusPlusToken,
  PlusToken,
  QuestionToken,
  RightBraceToken,
  RightBracketToken,
  RightParenToken,
  SemiColon,
  SlashEqualsToken,
  SlashToken,
  AndAndToken,
  BarBarToken,
  ExclamationToken,
  MinusGreaterThanToken,
} from './symbols'

/*
 * SymbolToken type.
 */
export type SymbolToken =
  | AndAndToken
  | AsteriskAsteriskEqualsToken
  | AsteriskAsteriskToken
  | AsteriskEqualsToken
  | AsteriskToken
  | BarBarToken
  | ColonToken
  | CommaToken
  | DotDotToken
  | DotToken
  | EqualsEqualsToken
  | EqualsToken
  | ExclamationEqualsToken
  | ExclamationToken
  | GreaterEqualsThanToken
  | GreaterThanToken
  | LeftBraceToken
  | LeftBracketToken
  | LeftParenToken
  | LessEqualsThanToken
  | LessThanToken
  | MinusEqualsToken
  | MinusGreaterThanToken
  | MinusMinusToken
  | MinusToken
  | PercentEqualsToken
  | PercentToken
  | PlusEqualsToken
  | PlusPlusToken
  | PlusToken
  | QuestionToken
  | RightBraceToken
  | RightBracketToken
  | RightParenToken
  | SemiColon
  | SlashEqualsToken
  | SlashToken
