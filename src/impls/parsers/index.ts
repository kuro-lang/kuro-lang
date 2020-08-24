import 'reflect-metadata'
import { container } from 'tsyringe'
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

const registerParsers = () => {
  container.register(ParserToken.Atom, {
    useClass: AtomParser,
  })

  container.register(ParserToken.And, {
    useClass: AndParser,
  })

  container.register(ParserToken.Equivalent, {
    useClass: EquivalentParser,
  })

  container.register(ParserToken.Comparison, {
    useClass: ComparisonParser,
  })

  container.register(ParserToken.AdditionAndSubtraction, {
    useClass: AdditionAndSubtractionParser,
  })

  container.register(ParserToken.MultiplicationAndDivisionSurplus, {
    useClass: MultiplicationAndDivisionSurplusParser,
  })

  container.register(ParserToken.Power, {
    useClass: PowerParser,
  })

  container.register(
    ParserToken.NotAndUnaryPlusAndUnaryMinusAndPrefixIncrementAndPrefixDecrement,
    {
      useClass: NotAndUnaryPlusAndUnaryMinusAndPrefixIncrementAndPrefixDecrementParser,
    }
  )

  container.register(ParserToken.PostIncrementAndPostDecrement, {
    useClass: PostIncrementAndPostDecrementParser,
  })

  container.register(
    ParserToken.PropertyAccessAndElementAccessAndFunctionCall,
    {
      useClass: PropertyAccessAndElementAccessAndFunctionCallParser,
    }
  )

  container.register(ParserToken.GroupAndBlockAndControls, {
    useClass: GroupAndBlockAndControlsParser,
  })

  container.register(ParserToken.Statements, {
    useClass: StatementsParser,
  })

  container.register(ParserToken.Expressions, {
    useClass: ExpressionsParser,
  })
}

registerParsers()

export * from './AtomParser'
export * from './RootParser'
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
