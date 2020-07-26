import { LiteralNodeBase } from '../../..'
import { PropertyAssignment } from '../../PropertyAssignment'

/**
 * ObjectLiteralExpression type.
 */
export type ObjectLiteralExpression = LiteralNodeBase<
  'object_literal_expression',
  {
    properties: PropertyAssignment[]
  }
>
