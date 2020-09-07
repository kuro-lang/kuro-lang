import { ParserToken, IParser } from '../..'
import { parserContainer } from '.'
import { Node } from '../../types'
import { Comparsion } from './ComparsionParser'
import { ProgramParser } from './ProgramParser'
import { StatementsParser } from './StatementsParser'
import { ExpressionsParser } from './ExpressionsParser'
import { AssignParser } from './AssignParser'
import { OrParser } from './OrParser'
import { AndParser } from './AndParser'
import { EquivalentParser } from './EquivalentParser'
import { AddAndSubParser } from './AddAndSubParser'
import { MulAndDivAndSurplusParser } from './MulAndDivAndSurplusParser'
import { PowerParser } from './PowerParser'
import { PrefixParser } from './PrefixParser'
import { CallParser } from './CallParser'
import { GroupParser } from './GroupParser'
import { AtomParser } from './AtomParser'
import { ControlsParser } from './ControlsParser'
import { BlockParser } from './BlockParser'

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
registerParser('Block', BlockParser)
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
registerParser('CallAndAccess', CallParser)
registerParser('Group', GroupParser)
registerParser('Controls', ControlsParser)
registerParser('Atom', AtomParser)
