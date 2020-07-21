/*
 * IndexedItem type.
 */
export type IndexedItem<T> = [number, T]

/**
 * Returns a generator that generates index and value set array.
 *
 * @param array Array.
 */
export function* indexed<T>(
  array: T[]
): Generator<IndexedItem<T>, void, unknown> {
  let index = 0

  for (const item of array) {
    const indexedItem: IndexedItem<T> = [index, item]
    yield indexedItem
    index++
  }
}
