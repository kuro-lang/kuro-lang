import { ILoc } from '../interfaces'

/*
 * NodeBase type.
 */
export type NodeBase<K extends string> = {
  /**
   * Kind.
   */
  kind: K

  /**
   * Location.
   */
  loc: ILoc
}
