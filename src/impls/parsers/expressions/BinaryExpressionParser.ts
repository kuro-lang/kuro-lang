import { IParser, Expression, TokenWalker, SourceCode } from '../../..'

/**
 * BinaryExpressionParser class.
 */
export class BinaryExpressionParser implements IParser<Expression> {
  parse(source: SourceCode, walker: TokenWalker): Expression {}
}
