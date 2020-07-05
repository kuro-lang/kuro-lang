import { TokenType } from './TokenType'
import { ILoc } from '../interfaces'

/*
 * TokenBase type.
 */
export type TokenBase<K extends string, T extends TokenType = 'other'> = {
  /**
   * Kind.
   */
  kind: K

  /**
   * Type.
   */
  type: T

  /**
   * Location.
   */
  loc: ILoc
}
