import { ILoc } from '../interfaces'

/*
 * TokenBase type.
 */
export type TokenBase<K extends string> = {
  /**
   * Kind.
   */
  kind: K

  /**
   * Location.
   */
  loc: ILoc
}
