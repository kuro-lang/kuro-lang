import { Token } from '../types'
import { IWalker } from './Walker'

/*
 * LexerRule interface.
 */
export interface ILexerRule {
  /**
   * Validate rule.
   *
   * @param walker String walker.
   */
  validate(walker: IWalker<string>): boolean

  /**
   * Execute rule.
   *
   * @param walker String walker.
   */
  execute(walker: IWalker<string>): Token
}
