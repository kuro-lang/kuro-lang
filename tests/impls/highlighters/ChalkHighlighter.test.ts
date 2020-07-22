import { ChalkHighlighter } from '../../../src/impls'
import chalk from 'chalk'
import { Lexer } from '../../../src'

describe('ChalkHighlighter test', () => {
  test('should set default palette', () => {
    const highlighter = new ChalkHighlighter()

    expect(highlighter.palette.indent).toBe(chalk.grey)
    expect(highlighter.palette.comment).toBe(chalk.grey)
    expect(highlighter.palette.identifier).toBe(chalk.white)
    expect(highlighter.palette.boolean).toBe(chalk.blue)
    expect(highlighter.palette.numeric).toBe(chalk.blue)
    expect(highlighter.palette.string).toBe(chalk.blue)
    expect(highlighter.palette.reserved).toBe(chalk.blue)
    expect(highlighter.palette.symbol).toBe(chalk.grey)
  })

  test('should set palette', () => {
    const highlighter = new ChalkHighlighter({
      indent: chalk.bgBlack,
      comment: chalk.bgBlackBright,
      identifier: chalk.bgBlue,
      boolean: chalk.bgBlueBright,
      numeric: chalk.bgCyan,
      string: chalk.bgCyanBright,
      reserved: chalk.bgGray,
      symbol: chalk.bgGreen,
    })

    expect(highlighter.palette.indent).toBe(chalk.bgBlack)
    expect(highlighter.palette.comment).toBe(chalk.bgBlackBright)
    expect(highlighter.palette.identifier).toBe(chalk.bgBlue)
    expect(highlighter.palette.boolean).toBe(chalk.bgBlueBright)
    expect(highlighter.palette.numeric).toBe(chalk.bgCyan)
    expect(highlighter.palette.string).toBe(chalk.bgCyanBright)
    expect(highlighter.palette.reserved).toBe(chalk.bgGray)
    expect(highlighter.palette.symbol).toBe(chalk.bgGreen)
  })

  test('should highlight', () => {
    // These are deliberately abandoned tests.
    const highlighter = new ChalkHighlighter()

    expect(highlighter.highlight(new Lexer('"value:" + 10')))
    expect(highlighter.highlight(new Lexer('/* */ //')))
    expect(highlighter.highlight(new Lexer('10 true false')))
    expect(highlighter.highlight(new Lexer('fn a () {}')))
  })
})
