import chalk from 'chalk'

const source = `
console.log(invalid)
`.trim()

const getDisplayError = (
  source: string,
  start: number,
  end: number,
  message: string
): string => {
  let lineNumber = 1
  for (let i = 0; i < source.length; ++i) {
    if (i === start) {
      break
    } else if (source[i] === '\n') {
      ++lineNumber
    }
  }

  let lineStart = start
  for (; lineStart > 0 && source[lineStart] !== '\n'; --lineStart) {}
  if (source[lineStart] === '\n') {
    ++lineStart
  }

  let lineEnd = end
  for (; lineEnd < source.length && source[lineEnd] !== '\n'; ++lineEnd) {}

  const linePrefix = `${lineNumber}| `

  const line =
    linePrefix +
    source.slice(lineStart, start) +
    chalk.red(source.slice(start, end)) +
    source.slice(end, lineEnd)

  const error =
    ' '.repeat(start - lineStart + linePrefix.length) +
    '^'.repeat(end - start) +
    '<-' +
    message

  return `${line}\n${error}`
}

console.log(getDisplayError(source, 12, 19, `'invalid' is not defined.`))
