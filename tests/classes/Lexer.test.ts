import 'reflect-metadata'
import { Lexer } from '../../src/classes'

describe('Lexer test', () => {
  test('should return next token', () => {
    const lexer = new Lexer('10 + 20\n')

    expect(lexer.nextToken()).toMatchObject({
      kind: 'numeric_literal',
      value: 10,
      loc: {
        start: 0,
        end: 2,
      },
    })
    expect(lexer.nextToken()).toBe(' ')
    expect(lexer.nextToken()).toMatchObject({
      kind: 'plus',
      loc: {
        start: 3,
        end: 4,
      },
    })
    expect(lexer.nextToken()).toBe(' ')
    expect(lexer.nextToken()).toMatchObject({
      kind: 'numeric_literal',
      value: 20,
      loc: {
        start: 5,
        end: 7,
      },
    })
  })

  test('should returns whether anlyzing is done', () => {
    const lexer = new Lexer('10')

    expect(lexer.done()).toBeFalsy()
    lexer.nextToken()
    expect(lexer.done()).toBeTruthy()
  })

  test('should returns token walker', () => {
    const lexer = new Lexer('10 + 20')
    const walker = lexer.extract()

    expect(walker.value()).toMatchObject({
      kind: 'numeric_literal',
      value: 10,
    })
    expect(walker.next()).toMatchObject({
      kind: 'plus',
    })
    expect(walker.next()).toMatchObject({
      kind: 'numeric_literal',
      value: 20,
    })
  })
})
