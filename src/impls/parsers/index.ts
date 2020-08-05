import { container } from 'tsyringe'
import { ParserToken } from '../..'
import {
  LiteralExpressionParser,
  ArrayLiteralExpressionParser,
} from './expressions'

export * from './expressions'
export * from './IdentifierParser'

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
