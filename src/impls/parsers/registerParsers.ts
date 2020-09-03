import { ParserToken, IParser } from '../..'
import {
  parserContainer,
  ProgramParser,
  StatementsParser,
  ExpressionsParser,
  AssignParser,
  OrParser,
  EquivalentParser,
  AddAndSubParser,
  MulAndDivAndSurplusParser,
  PowerParser,
  PrefixParser,
  CallParser,
  GroupParser,
  AtomParser,
  AndParser,
} from '.'
import { Node } from '../../types'
import { Comparsion } from './ComparsionParser'

/**
 * Register a parser by given key and given class.
 *
 * @param tokenKey Key of parser token.
 * @param parserClass Parser class.
 */
const registerParser = <N extends Node>(
  tokenKey: keyof typeof ParserToken,
  parserClass: new () => IParser<N>
) => {
  parserContainer.bind<IParser<N>>(ParserToken[tokenKey]).to(parserClass)
}

registerParser('Program', ProgramParser)
registerParser('Statements', StatementsParser)
registerParser('Expressions', ExpressionsParser)
registerParser('Assign', AssignParser)
registerParser('Or', OrParser)
registerParser('And', AndParser)
registerParser('Equivalent', EquivalentParser)
registerParser('Comparsion', Comparsion)
registerParser('AddAndSub', AddAndSubParser)
registerParser('MulAndDivAndSurplus', MulAndDivAndSurplusParser)
registerParser('Power', PowerParser)
registerParser('Prefix', PrefixParser)
registerParser('Call', CallParser)
registerParser('Group', GroupParser)
registerParser('Atom', AtomParser)
