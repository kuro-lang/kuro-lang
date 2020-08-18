/**
 * Returns the clamp function that clamps given value between the given min and given max values.
 */
export const useClamp = (min: number, max: number) => (value: number): number =>
  Math.min(Math.max(value, min), max)
