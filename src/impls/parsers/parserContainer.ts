import 'reflect-metadata'
import { Container } from 'inversify'
import getDecorators from 'inversify-inject-decorators'

/**
 * Parser DI container.
 */
export const parserContainer = new Container()

/**
 * DI decorators.
 */
export const decorators = getDecorators(parserContainer)

/**
 * Parser injection decorator.
 */
export const injectParser = decorators.lazyInject
