import 'reflect-metadata'
import { container } from 'tsyringe'
import { ParserToken } from '../..'
import {
  LiteralExpressionParser,
  ArrayLiteralExpressionParser,
} from './expressions'

const registerParsers = () => {
  container.register(
    ParserToken.LiteralExpressionParser,
    LiteralExpressionParser
  )
  container.register(
    ParserToken.ArrayLiteralParser,
    ArrayLiteralExpressionParser
  )
}

registerParsers()

export * from './expressions'
export * from './IdentifierParser'
