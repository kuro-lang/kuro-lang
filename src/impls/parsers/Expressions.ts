import { Parser } from '../../abstracts/parsers'
import { SourceCode, TokenWalker, ParserToken, Node } from '../../types'
import { injectable, inject } from 'tsyringe'
import { IParser } from '../../interfaces'

/**
 * ExpressionsParser
 */
@injectable()
export class ExpressionsParser extends Parser {
  /**
   * ExpressionsParser constructor.
   *
   * @param assign Assign parser.
   */
  constructor(@inject(ParserToken.Assign) protected assign: IParser) {
    super()
  }

  parse(source: SourceCode, walker: TokenWalker): Node {
    return this.assign.parse(source, walker)
  }
}
