import { Parser } from '../../abstracts/parsers'
import { SourceCode, TokenWalker, ParserToken, Node } from '../../types'
import { injectable } from 'inversify'
import { IParser } from '../../interfaces'
import { injectParser } from './parserContainer'

/**
 * ExpressionsParser
 */
@injectable()
export class ExpressionsParser extends Parser {
  @injectParser(ParserToken.Assign) protected assign: IParser

  parse(source: SourceCode, walker: TokenWalker): Node {
    return this.assign.parse(source, walker)
  }
}
