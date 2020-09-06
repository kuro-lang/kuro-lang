import chalk from 'chalk'
import { parserContainer } from './parserContainer'
import './registerParsers'
import { makeSource } from '../../utils'
import { Lexer } from '../../classes'
import { IParser } from '../../interfaces'
import { Node, ParserToken } from '../../types'
import { LocatedError } from '../errors'
import { ChalkLocatedErrorReporter } from '../locatedErrorRepoters'

class Logger {
  constructor(private ignoreKeys: string[] = []) {}

  log(object: unknown): void {
    console.log(this.getObjectString(object, 0))
  }

  private getObjectString(object: unknown, offset: number, keyRight = false) {
    if (typeof object === 'number') {
      return chalk.blue(object)
    }

    if (typeof object === 'boolean') {
      return chalk.blue(object)
    }

    if (typeof object === 'string') {
      return chalk.red(`"${object}"`)
    }

    if (Array.isArray(object)) {
      let string = (keyRight ? '' : this.getSpaces(offset)) + '[\n'

      Object.keys(object).forEach((key) => {
        if (this.ignoreKeys.find((k) => k === key)) {
          return
        }
        string += this.getObjectString(object[key], offset + 1)
        string += '\n'
      })

      string += this.getSpaces(offset) + ']'
      return string
    }

    if (typeof object === 'object') {
      let string = (keyRight ? '' : this.getSpaces(offset)) + '{\n'

      Object.keys(object).forEach((key) => {
        if (this.ignoreKeys.find((k) => k === key)) {
          return
        }
        string += this.getSpaces(offset + 1) + chalk.green(key) + ' '
        string += this.getObjectString(object[key], offset + 1, true)
        string += '\n'
      })

      string += this.getSpaces(offset) + '}'
      return string
    }

    if (typeof object === 'undefined') {
      return chalk.grey('undefined')
    }

    return chalk.red.bold('<error>')
  }

  private getSpaces(offset: number) {
    let string = ''
    const colors = [chalk.gray]
    const space = ' '

    for (let i = 0; i < offset; ++i) {
      string += colors[i % colors.length](space)
    }

    return string
  }
}

console.clear()

const source = makeSource(
  `
`.trim()
)

try {
  const lexer = new Lexer(source.code)
  const walker = lexer.toTokenWalker(source).setIndex(-1)
  const parser = parserContainer.get<IParser<Node>>(ParserToken.Program)
  const ast = parser.parse(walker)
  const logger = new Logger(['loc'])

  logger.log(ast)
} catch (error) {
  if (error instanceof LocatedError) {
    const reporter = new ChalkLocatedErrorReporter()
    reporter.report(source, error)
  } else {
    console.error(error)
  }
}
