/**
 * Returns the result of constraining an inclusive range.
 *
 * @param min - The minimum value the result can be
 * @param max - The maximum value the result can be
 * @param value - The value to constrain
 * @returns The value of `value` if `min <= value <= max`, `min` if `value < min`, and `max` if `value > max`
 */
export function clamp(min: number, max: number, value: number): number {
  return Math.max(min, Math.min(max, value));
}
