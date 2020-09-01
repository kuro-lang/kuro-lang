import { Walker } from './Walker'
import { Token, SourceCode } from '../types'

/**
 * TokenWalker class.
 */
export class TokenWalker extends Walker<Token> {
  /**
   * SourceCode object.
   */
  source: SourceCode

  /**
   * TokenWalker constructor.
   *
   * @param source SourceCode object.
   * @param tokens Tokens array.
   */
  constructor(source: SourceCode, tokens: Token[]) {
    super(tokens)
    this.source = source
  }
}
