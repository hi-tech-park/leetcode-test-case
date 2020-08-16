export function twoSum(nums: number[], target: number): number[] {
  const result: Array<number> = [];
  if (nums.length < 2) return result;
  for (let i: number = 0; i < nums.length; i++) {
    for (let j: number = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
};