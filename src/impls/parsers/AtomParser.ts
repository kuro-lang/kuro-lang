import { IParser } from '../..'
import { Node, SourceCode, TokenWalker } from '../../types'
import { LocatedError, UnexpectedTokenError } from '../errors'

/**
 * AtomParser class.
 */
export class AtomParser implements IParser<Node> {
  parse(source: SourceCode, walker: TokenWalker): Node {
    const token = walker.next()

    if (!token) {
      throw new LocatedError(`peek error`, walker.locTo(-1))
    }

    if (token.kind === 'boolean_literal') {
      return {
        ...token,
        kind: 'boolean_literal_expression',
      }
    }

    if (token.kind === 'numeric_literal') {
      return {
        ...token,
        kind: 'numeric_literal_expression',
      }
    }

    if (token.kind === 'string_literal') {
      return {
        ...token,
        kind: 'string_literal_expression',
      }
    }

    if (token.kind === 'identifier') {
      return {
        ...token,
      }
    }

    throw new UnexpectedTokenError(
      `unexpected token ${token.loc.slice(source.code)}`,
      token.loc
    )
  }
}
