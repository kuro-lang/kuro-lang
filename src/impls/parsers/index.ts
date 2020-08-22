import 'reflect-metadata'
import { container } from 'tsyringe'
import { ParserToken } from '../..'
import { AtomParser } from './AtomParser'
import { ExpressionsParser } from './Expressions'
import { StatementsParser } from './StatementsParser'
import { GroupAndBlockAndControlsParser } from './GroupAndBlockAndControlsParser'

const registerParsers = () => {
  container.register(ParserToken.Atom, {
    useClass: AtomParser,
  })

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
export * from './GroupAndBlockAndControlsParser'
export * from './StatementsParser'
export * from './Expressions'
