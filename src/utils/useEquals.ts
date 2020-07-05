/*
 * Returns a function that checks if the value is the same as the argument passed.
 */
export const useEquals = <T>(value: T) => (passed: T): boolean =>
  value === passed
