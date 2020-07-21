import { IWalker, ILexerRule, ILexer } from '../interfaces'
import {
  BlockCommentRule,
  InlineCommentRule,
  BooleanLiteralLexerRule,
  NumericLiteralRule,
  StringLiteralRule,
  IdentifierRule,
  PatternRule,
} from '../impls'
import { Token } from '../types'

/*
 * Lexer class.
 */
export class Lexer implements ILexer {
  /**
   * String walker.
   */
  readonly walker: IWalker<string>

  /**
   * Rules.
   */
  readonly rules: ILexerRule[] = [
    new BlockCommentRule(),
    new InlineCommentRule(),
    new BooleanLiteralLexerRule(),
    new NumericLiteralRule(),
    new StringLiteralRule(),
    new IdentifierRule(),
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
      make('while', 'while'),
    ]),
  ]

  /**
   * Lexer constructor.
   *
   * @param walker String walker.
   */
  constructor(walker: IWalker<string>) {
    this.walker = walker
  }

  next(): Token | string {
    for (const rule of this.rules) {
      if (rule.validate(this.walker)) {
        return rule.execute(this.walker)
      }
    }

    const token = this.walker.value() || ''
    this.walker.next()

    return token
  }

  done(): boolean {
    return this.walker.done()
  }
}
