import { Node, Token } from '../../types'
import { IParser } from '../..'
import { TokenWalker } from '../../classes'
import { LocatedError } from '../../impls'

/**
 * Parser class.
 */
export abstract class Parser<N extends Node> implements IParser<N> {
  abstract parse(walker: TokenWalker): N

  /**
   * Returns a LocatedError that has a message of peek error.
   *
   * @param walker TokenWalker.
   */
  protected createPeekError(walker: TokenWalker): LocatedError {
    return new LocatedError(`peek error`, walker.locTo(-1))
  }

  /**
   * Returns a LocatedError object that has a message of unexpected error.
   *
   * @param source SourceCode object.
   * @param loc Token walker.
   * @param expected Expected token kind.
   */
  protected createUnexpectedError(
    token: Token,
    walker: TokenWalker,
    expected?: string
  ): LocatedError {
    const { loc } = token
    const got = loc.slice(walker.source.code) || 'end of file'

    if (expected) {
      return new LocatedError(`expected ${expected}, but got ${got}`, loc)
    }

    return new LocatedError(`unexpected token ${got}`, loc)
  }

  /**
   * Forward walker to primary token.
   *
   * @param walker Token walker.
   */
  protected forwardToPrimaryToken(
    walker: TokenWalker
  ): ReturnType<TokenWalker['peek']> {
    let peek = walker.peek()

    while (peek && (peek.kind === 'semi_colon' || peek.kind === 'new_line')) {
      walker.next()
      peek = walker.peek()
    }

    return peek
  }
}
