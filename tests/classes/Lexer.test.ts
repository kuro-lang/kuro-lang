import { Walker, Lexer } from '../../src/classes'

describe('Lexer test', () => {
  test('should set walker', () => {
    const walker = new Walker('')
    const lexer = new Lexer(walker)

    expect(lexer.walker).toBe(walker)
  })

  test('should return next token', () => {
    const walker = new Walker('10 + 20\n')
    const lexer = new Lexer(walker)

    expect(lexer.next()).toMatchObject({
      kind: 'numeric_literal',
      value: 10,
      loc: {
        start: 0,
        end: 2,
      },
    })
    expect(lexer.next()).toBe(' ')
    expect(lexer.next()).toMatchObject({
      kind: 'plus',
      loc: {
        start: 3,
        end: 4,
      },
    })
    expect(lexer.next()).toBe(' ')
    expect(lexer.next()).toMatchObject({
      kind: 'numeric_literal',
      value: 20,
      loc: {
        start: 5,
        end: 7,
      },
    })
  })

  test('should returns whether anlyzing is done', () => {
    const walker = new Walker('10')
    const lexer = new Lexer(walker)

    expect(lexer.done()).toBeFalsy()
    lexer.next()
    expect(lexer.done()).toBeTruthy()
  })
})
