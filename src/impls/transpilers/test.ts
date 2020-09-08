import { parserContainer } from '../parsers'
import { makeSource } from '../../utils'
import { Lexer } from '../../classes'
import { IParser } from '../../interfaces'
import { Program, ParserToken } from '../../types'
import { LocatedError } from '../errors'
import { ChalkLocatedErrorReporter } from '../locatedErrorRepoters'
import { JsTranspiler } from './JsTranspiler'

console.clear()

const source = makeSource(
  `
fn usePrefix(prefix) {
  fn (value) {
    prefix + value
  }
}

fn result(value) {
  "Result: " + value
}

const dollar = usePrefix("$")

10 + 2 -> dollar -> result -> console.log
`.trim()
)

try {
  const lexer = new Lexer(source.code)
  const parser = parserContainer.get<IParser<Program>>(ParserToken.Program)
  const transpiler = new JsTranspiler()

  console.log('Input:')
  console.log('```kuro')
  console.log(source.code)
  console.log('```')

  console.log()

  const program = parser.parse(lexer.toTokenWalker(source).setIndex(-1))
  // console.log('AST:')
  // console.log(
  //   JSON.stringify(program, (key, value) => (key === 'loc' ? void 0 : value), 2)
  // )

  // console.log()

  const output = transpiler.transpile(program)
  console.log('Output:')
  console.log('```js')
  console.log(output)
  console.log('```')

  console.log()

  console.log('Evaluate:')
  console.log(eval(output))
} catch (error) {
  if (error instanceof LocatedError) {
    const reporter = new ChalkLocatedErrorReporter()
    reporter.report(source, error)
  } else {
    console.error(error)
  }
}
