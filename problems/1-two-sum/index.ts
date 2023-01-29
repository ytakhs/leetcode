export function twoSum(nums: number[], target: number): number[] {
  const m: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const c: number = target - nums[i];

    const idx = m.get(c);
    if (idx !== undefined) {
      return [idx, i];
    }

    m.set(nums[i], i);
  }

  return [];
}
