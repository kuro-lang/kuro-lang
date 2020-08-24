import { IParser } from '../..'
import {
  SourceCode,
  TokenWalker,
  Root,
  ParserToken,
  Statement,
} from '../../types'
import { injectable, inject } from 'tsyringe'
import { loop } from '../../utils'
import { Loc } from '../../classes'

/**
 * RootParser class.
 */
@injectable()
export class RootParser implements IParser {
  constructor(
    @inject(ParserToken.Statements)
    protected statements: IParser<Statement>
  ) {}

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
