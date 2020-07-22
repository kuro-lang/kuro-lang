import chalk from 'chalk'
import { IHighlighter, ILexer } from '../..'
import { Lexer } from '../../classes'
import {
  Token,
  LiteralToken,
  CommentToken,
  IdentifierToken,
  ReservedToken,
  SymbolToken,
} from '../../types'
import {
  isLiteralToken,
  isCommentToken,
  isIdentifierToken,
  isReservedToken,
  isSymbolToken,
  indexed,
} from '../../utils'

/*
 * ChalkHighlighterPalette type.
 */
export type ChalkHighlighterPalette = {
  /**
   * Indent color.
   */
  indent: chalk.Chalk

  /**
   * Comment color.
   */
  comment: chalk.Chalk

  /**
   * Identifier color.
   */
  identifier: chalk.Chalk

  /**
   * Boolean literal color.
   */
  boolean: chalk.Chalk

  /**
   * Numeric literal color.
   */
  numeric: chalk.Chalk

  /**
   * String literal color.
   */
  string: chalk.Chalk

  /**
   * Reserved keyword color.
   */
  reserved: chalk.Chalk

  /**
   * Symbol color.
   */
  symbol: chalk.Chalk
}

/*
 * ChalkHighlighter class.
 */
export class ChalkHighlighter implements IHighlighter {
  /**
   * Palette.
   */
  readonly palette: ChalkHighlighterPalette

  /**
   * ChalkHighlighter constructor.
   *
   * @param palette Highlighter palette.
   */
  constructor(palette?: Partial<ChalkHighlighterPalette>) {
    this.palette = {
      indent: palette?.indent ?? chalk.grey,
      comment: palette?.comment ?? chalk.grey,
      identifier: palette?.identifier ?? chalk.white,
      boolean: palette?.boolean ?? chalk.blue,
      numeric: palette?.numeric ?? chalk.blue,
      string: palette?.string ?? chalk.blue,
      reserved: palette?.reserved ?? chalk.blue,
      symbol: palette?.symbol ?? chalk.grey,
    }
  }

  highlight(lexer: ILexer): void {
    let result = ''

    while (!lexer.done()) {
      const token = lexer.nextToken()

      result += this.highlightToken(token, lexer)
    }

    const highlighted = this.lined(result)
    console.log(highlighted)
  }

  /**
   * Returns lined code.
   *
   * @param code code.
   */
  protected lined(code: string): string {
    const lines = code.split(/\n/g)
    let result = ''

    for (const [index, line] of indexed(lines)) {
      const num = (index + 1).toString()
      const numPad = ' '.repeat(lines.length.toString().length - num.length)
      const noindent = line.trim()
      const indent = this.palette
        .indent('•')
        .repeat(line.length - noindent.length)
      result += ` ${numPad}${num} │ ${indent}${noindent}\n`
    }

    return result
  }

  /**
   * Resturns highlighted token string.
   *
   * @param token Token.
   * @param lexer Lexer.
   */
  protected highlightToken(token: Token | string, lexer: ILexer): string {
    if (typeof token === 'string') {
      return this.highlightTokenString(token)
    }

    return this.highlightRawToken(token, lexer)
  }

  /**
   * Resturns highlighted token string.
   *
   * @param token Token string.
   */
  protected highlightTokenString(token: string): string {
    return token
  }

  /**
   * Resturns highlighted token string.
   *
   * @param token Token.
   * @param lexer Lexer.
   */
  protected highlightRawToken(token: Token, lexer: ILexer): string {
    if (isCommentToken(token)) {
      return this.highlightCommentToken(token, lexer)
    }

    if (isIdentifierToken(token)) {
      return this.highlightIdentifierToken(token)
    }

    if (isLiteralToken(token)) {
      return this.highlightLiteralToken(token, lexer)
    }

    if (isReservedToken(token)) {
      return this.highlightReservedToken(token)
    }

    if (isSymbolToken(token)) {
      return this.highlightSymbolToken(token, lexer)
    }
  }

  /**
   * Returns highlighted comment token string.
   *
   * @param token Comment token.
   * @param lexer Lexer.
   */
  protected highlightCommentToken(token: CommentToken, lexer: ILexer): string {
    return this.palette.comment(
      lexer.slice(token.loc.start, token.loc.end).join('')
    )
  }

  /**
   * Returns highlighted identifier token string.
   *
   * @param token Identifier token.
   */
  protected highlightIdentifierToken(token: IdentifierToken): string {
    return this.palette.identifier(token.identifier)
  }

  /**
   * Returns highlighted literal token string.
   *
   * @param token Literal token.
   * @param lexer Lexer.
   */
  protected highlightLiteralToken(token: LiteralToken, lexer: ILexer): string {
    if (token.kind === 'boolean_literal') {
      return this.palette.boolean(token.value)
    }

    if (token.kind === 'numeric_literal') {
      return this.palette.numeric(token.value)
    }

    if (token.kind === 'string_literal') {
      return this.palette.string(
        lexer.slice(token.loc.start, token.loc.end).join('')
      )
    }
  }

  /**
   * Returns highlighted reserved token string.
   *
   * @param token Reserved token.
   */
  protected highlightReservedToken(token: ReservedToken): string {
    return this.palette.reserved(token.kind)
  }

  /**
   * Returns highlighted symbol token string.
   *
   * @param token Token.
   * @param lexer Lexer.
   */
  protected highlightSymbolToken(token: SymbolToken, lexer: ILexer): string {
    return this.palette.symbol(
      lexer.slice(token.loc.start, token.loc.end).join('')
    )
  }
}
