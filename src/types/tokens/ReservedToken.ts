import {
  BreakToken,
  ConstToken,
  ContinueToken,
  ElseToken,
  FnToken,
  ForToken,
  IfToken,
  InToken,
  LetToken,
  LoopToken,
  WhileToken,
} from './reserveds'

/*
 * ReservedToken type.
 */
export type ReservedToken =
  | BreakToken
  | ConstToken
  | ContinueToken
  | ElseToken
  | FnToken
  | ForToken
  | IfToken
  | InToken
  | LetToken
  | LoopToken
  | WhileToken
