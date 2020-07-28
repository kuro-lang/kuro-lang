import chalk from 'chalk'
import { ILocatedErrorReporter } from '../..'
import { LocatedError } from '../errors'
import { SourceCode } from '../../types'
import { indexed } from '../../utils'
import { Lexer } from '../../classes'

/*
 * ChalkLocatedErrorRepoter class.
 */
export class ChalkLocatedErrorReporter implements ILocatedErrorReporter {
  report(source: SourceCode, error: LocatedError): void {
    const { message, loc } = error
    const { code, filename } = source

    let lineNumber = 1
    for (const [i, char] of indexed(code.split(''))) {
      if (i === loc.start) {
        break
      } else if (char === '\n') {
        ++lineNumber
      }
    }

    let lineStart = loc.start
    while (lineStart > 0 && code[lineStart] !== '\n') {
      --lineStart
    }
    if (code[lineStart] === '\n') {
      ++lineStart
    }

    let lineEnd = loc.end
    while (lineEnd < code.length && code[lineEnd] !== '\n') {
      ++lineEnd
    }

    const head = ` ${lineNumber} │ `
    const previous = code.slice(lineStart, loc.start)
    const body = code.slice(loc.start, loc.end)
    const next = code.slice(loc.end, lineEnd)

    const spacingToBody =
      ' '.repeat(head.length) +
      ' '.repeat(head.length + previous.length - head.length)
    const bodyRange = '─'.repeat(body.length - 2)
    const errorRange = `${spacingToBody}╰${bodyRange}┴───`
    const spacedMessage = ` Error(${loc.start}~${loc.end}): ${message}`

    const errorLine = `${errorRange}${spacedMessage}`

    console.log(
      chalk.grey(
        '─'.repeat(head.length - 2) +
          '┬' +
          '─'.repeat(errorLine.length - head.length + 1)
      )
    )
    console.log(
      chalk.grey(' '.repeat(head.length - 2) + '│ File: ') +
        chalk.bold(filename ?? chalk.grey('no file'))
    )
    console.log(
      chalk.grey(
        '─'.repeat(head.length - 2) +
          '┼' +
          '─'.repeat(errorLine.length - head.length + 1)
      )
    )
    console.log(`${chalk.grey(head)}${previous}${chalk.red(body)}${next}`)
    console.log(`${chalk.red(errorRange)}${chalk.bgRed.white(spacedMessage)}`)

    if (error.stack) {
      console.error(error.stack)
    }
  }
}
