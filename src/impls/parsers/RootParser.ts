import { IParser } from '../..'
import {
  SourceCode,
  TokenWalker,
  Root,
  ParserToken,
  Statement,
} from '../../types'
import { injectable } from 'inversify'
import { loop } from '../../utils'
import { Loc } from '../../classes'
import { injectParser } from './parserContainer'

/**
 * RootParser class.
 */
@injectable()
export class RootParser implements IParser {
  @injectParser(ParserToken.Statements)
  protected statements: IParser<Statement>

  parse(source: SourceCode, walker: TokenWalker): Root {
    const statements: Statement[] = []

    loop(({ end }) => {
      const node = this.statements.parse(source, walker)
      statements.push(node)

      if (!walker.value()) {
        end()
      }
    })

    return {
      kind: 'root',
      statements,
      loc: statements.reduce((loc, node) => loc.merge(node.loc), new Loc(0, 0)),
    }
  }
}
