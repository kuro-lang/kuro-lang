import { injectable } from 'tsyringe'
import { IParser, Identifier } from '../..'
import { TokenWalker, SourceCode } from '../../types'
import { UnexpectedTokenError } from '../errors'

/**
 * IdentifierParser class.
 */
@injectable()
export class IdentifierParser implements IParser<Identifier> {
  parse(source: SourceCode, walker: TokenWalker): Identifier {
    const token = walker.value()

    if (token.kind === 'identifier') {
      return {
        kind: 'identifier',
        identifier: token.identifier,
        loc: token.loc,
      }
    }

    throw new UnexpectedTokenError(
      `unexpected token ${token.loc.slice(source.code)}`,
      token.loc
    )
  }
}
