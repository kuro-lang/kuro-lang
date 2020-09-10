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
  IncaseToken,
  AsyncToken,
} from './reserveds'

/*
 * ReservedToken type.
 */
export type ReservedToken =
  | AsyncToken
  | BreakToken
  | ConstToken
  | ContinueToken
  | ElseToken
  | FnToken
  | ForToken
  | IfToken
  | IncaseToken
  | InToken
  | LetToken
  | LoopToken
  | ReturnToken
  | UseToken
  | WhileToken
