import 'reflect-metadata'
import { container } from 'tsyringe'
import { ParserToken } from '../..'
import { AtomParser } from './AtomParser'

const registerParsers = () => {
  container.register(ParserToken.Atom, {
    useClass: AtomParser,
  })
}

registerParsers()

export * from './AtomParser'
