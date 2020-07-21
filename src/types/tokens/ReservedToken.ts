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
  UseToken,
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
  | UseToken
  | WhileToken
