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
  AwaitToken,
} from './reserveds'

/*
 * ReservedToken type.
 */
export type ReservedToken =
  | AsyncToken
  | AwaitToken
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
