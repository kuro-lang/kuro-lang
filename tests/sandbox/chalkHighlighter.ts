import {
  Lexer,
  ChalkHighlighter,
  LocatedError,
  ChalkLocatedErrorReporter,
} from '../../src'

const code = `
use stdio::{ println }

const msg = "Hello world"

msg -> println // Hello world

for i in 0..10 {
  i -> println
}
`.trim()
const filename = 'test.kuro'

try {
  const lexer = new Lexer(code)
  const highlighter = new ChalkHighlighter()

  highlighter.highlight({ code, filename }, lexer)
} catch (error) {
  if (error instanceof LocatedError) {
    const reporter = new ChalkLocatedErrorReporter()
    reporter.report({ code, filename }, error)
  }
}
