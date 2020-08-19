import { IParser } from '../..'
import { SourceCode, TokenWalker, Node } from '../../types'

/**
 * Parser abstract class.
 */
export abstract class Parser implements IParser {
  abstract parse(source: SourceCode, walker: TokenWalker): Node
}
