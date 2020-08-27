import { Node, SourceCode, TokenWalker } from '../../types'
import { injectable } from 'inversify'
import { Parser } from '../../abstracts'

/**
 * AtomParser class.
 */
@injectable()
export class AtomParser extends Parser {
  parse(source: SourceCode, walker: TokenWalker): Node {
    const token = walker.next()

    if (!token) {
      throw this.createPeekError(source, walker)
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

    throw this.createUnexpectedError(source, token.loc)
  }
}
