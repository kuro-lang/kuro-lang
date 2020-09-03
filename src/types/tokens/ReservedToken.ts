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
  ReturnToken,
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
  | ReturnToken
  | UseToken
  | WhileToken
