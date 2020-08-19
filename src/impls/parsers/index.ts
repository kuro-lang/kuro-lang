import 'reflect-metadata'
import { container } from 'tsyringe'
import { ParserToken } from '../..'
import { AtomParser } from './AtomParser'
import { ExpressionsParser } from './Expressions'

const registerParsers = () => {
  container.register(ParserToken.Atom, {
    useClass: AtomParser,
  })
  container.register(ParserToken.Expressions, {
    useClass: ExpressionsParser,
  })
}

registerParsers()

export * from './AtomParser'
export * from './RootParser'
export * from './Expressions'
