import { IdentifierParser, Lexer, makeSource } from '../../../src'

describe('IdentifierParser test', () => {
  test('should parse identifier', () => {
    const source = makeSource('hoge')
    const lexer = new Lexer(source.code)
    const parser = new IdentifierParser()

    expect(parser.parse(source, lexer.extract())).toMatchObject({
      kind: 'identifier',
      identifier: 'hoge',
    })
  })
})
