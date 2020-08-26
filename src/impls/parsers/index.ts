import 'reflect-metadata'
import { ParserToken } from '../..'
import { AtomParser } from './AtomParser'
import { ExpressionsParser } from './Expressions'
import { StatementsParser } from './StatementsParser'
import { GroupAndBlockAndControlsParser } from './GroupAndBlockAndControlsParser'
import { PropertyAccessAndElementAccessAndFunctionCallParser } from './PropertyAccessAndElementAccessAndFunctionCallParser'
import { PostIncrementAndPostDecrementParser } from './PostIncrementAndPostDecrementParser'
import { NotAndUnaryPlusAndUnaryMinusAndPrefixIncrementAndPrefixDecrementParser } from './NotAndUnaryPlusAndUnaryMinusAndPrefixIncrementAndPrefixDecrementParser'
import { PowerParser } from './PowerParser'
import { MultiplicationAndDivisionSurplusParser } from './MultiplicationAndDivisionSurplusParser'
import { AdditionAndSubtractionParser } from './AdditionAndSubtractionParser'
import { ComparisonParser } from './ComparisonParser'
import { EquivalentParser } from './EquivalentParser'
import { AndParser } from './AndParser'
import { OrParser } from './OrParser'
import { AssignParser } from './AssignParser'
import { RootParser } from './RootParser'
import { parserContainer } from './parserContainer'
import { IParser } from '../../interfaces'
import { Node } from '../../types'

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

const registerParsers = () => {
  registerParser('Atom', AtomParser)
  registerParser('Assign', AssignParser)
  registerParser('Or', OrParser)
  registerParser('And', AndParser)
  registerParser('Equivalent', EquivalentParser)
  registerParser('Comparison', ComparisonParser)
  registerParser('AdditionAndSubtraction', AdditionAndSubtractionParser)
  registerParser(
    'MultiplicationAndDivisionSurplus',
    MultiplicationAndDivisionSurplusParser
  )
  registerParser('Power', PowerParser)
  registerParser(
    'NotAndUnaryPlusAndUnaryMinusAndPrefixIncrementAndPrefixDecrement',
    NotAndUnaryPlusAndUnaryMinusAndPrefixIncrementAndPrefixDecrementParser
  )
  registerParser(
    'PostIncrementAndPostDecrement',
    PostIncrementAndPostDecrementParser
  )
  registerParser(
    'PropertyAccessAndElementAccessAndFunctionCall',
    PropertyAccessAndElementAccessAndFunctionCallParser
  )
  // registerParser('Group', Group)
  registerParser('GroupAndBlockAndControls', GroupAndBlockAndControlsParser)
  registerParser('Expressions', ExpressionsParser)
  registerParser('Statements', StatementsParser)
  registerParser('Root', RootParser)
}

registerParsers()

export * from './AtomParser'
export * from './RootParser'
export * from './AssignParser'
export * from './OrParser'
export * from './AndParser'
export * from './EquivalentParser'
export * from './ComparisonParser'
export * from './AdditionAndSubtractionParser'
export * from './MultiplicationAndDivisionSurplusParser'
export * from './PowerParser'
export * from './NotAndUnaryPlusAndUnaryMinusAndPrefixIncrementAndPrefixDecrementParser'
export * from './PostIncrementAndPostDecrementParser'
export * from './PropertyAccessAndElementAccessAndFunctionCallParser'
export * from './GroupAndBlockAndControlsParser'
export * from './StatementsParser'
export * from './Expressions'
