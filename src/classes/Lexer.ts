import { ILexerRule, ILexer } from '../interfaces'
import {
  BlockCommentRule,
  InlineCommentRule,
  BooleanLiteralLexerRule,
  NumericLiteralRule,
  StringLiteralRule,
  IdentifierRule,
  PatternRule,
} from '../impls'
import { Token, TokenWalker } from '../types'
import { Walker } from './Walker'

/*
 * Lexer class.
 */
export class Lexer extends Walker<string> implements ILexer {
  /**
   * Rules.
   */
  readonly rules: ILexerRule[] = [
    new BlockCommentRule(),
    new InlineCommentRule(),
    new BooleanLiteralLexerRule(),
    new NumericLiteralRule(),
    new StringLiteralRule(),
    new PatternRule((make) => [
      make('&&', 'and_and'),
      make('*', 'asterisk'),
      make('**', 'asterisk_asterisk'),
      make('**=', 'asterisk_asterisk_equals'),
      make('*=', 'asterisk_equals'),
      make('||', 'bar_bar'),
      make('break', 'break'),
      make(':', 'colon'),
      make(';', 'comma'),
      make('const', 'const'),
      make('continue', 'continue'),
      make(',', 'comma'),
      make('.', 'dot'),
      make('..', 'dot_dot'),
      make('else', 'else'),
      make('=', 'equals'),
      make('==', 'equals_equals'),
      make('!=', 'exclamation_equals'),
      make('!=', 'exclamation'),
      make('fn', 'fn'),
      make('for', 'for'),
      make('>=', 'greater_equals_than'),
      make('>', 'greater_than'),
      make('if', 'if'),
      make('in', 'in'),
      make('{', 'left_brace'),
      make('[', 'left_bracket'),
      make('(', 'left_paren'),
      make('<=', 'less_equals_than'),
      make('<', 'less_than'),
      make('let', 'let'),
      make('loop', 'loop'),
      make('-', 'minus'),
      make('-=', 'minus_equals'),
      make('->', 'minus_greater_than'),
      make('--', 'minus_minus'),
      make('%', 'percent'),
      make('%=', 'percent_equals'),
      make('+', 'plus'),
      make('+=', 'plus_equals'),
      make('++', 'plus_plus'),
      make('?', 'question'),
      make('}', 'right_brace'),
      make(']', 'right_bracket'),
      make(')', 'right_paren'),
      make('/', 'slash'),
      make('/=', 'slash_equals'),
      make('use', 'use'),
      make('while', 'while'),
      make('\n', 'new_line'),
    ]),
    new IdentifierRule(),
  ]

  /**
   * Lexer constructor.
   *
   * @param source Source code.
   */
  constructor(source: string) {
    super(source)
  }

  nextToken(): Token | string {
    for (const rule of this.rules) {
      if (rule.validate(this)) {
        return rule.execute(this)
      }
    }

    const token = this.value()
    this.next()

    return token
  }

  *[Symbol.iterator](): Iterator<Token | string> {
    while (!this.done()) {
      yield this.nextToken()
    }
  }

  extract(): TokenWalker {
    const tokens: Token[] = []

    for (const token of this) {
      if (typeof token !== 'string') {
        tokens.push(token)
      }
    }

    return new Walker<Token>(tokens)
  }
}
