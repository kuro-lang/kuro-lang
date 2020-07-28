import { Lexer, LocatedError, ChalkLocatedErrorReporter } from '../../src'

const code = `
const a = "hello world
`.trim()
const filename = 'test.kuro'

const lexer = new Lexer(code)

try {
  while (!lexer.done()) {
    console.log('Token:', lexer.nextToken())
  }
} catch (error) {
  if (error instanceof LocatedError) {
    const reporter = new ChalkLocatedErrorReporter()
    reporter.report({ code, filename }, error)
  }
}
