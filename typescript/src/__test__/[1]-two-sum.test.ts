
import { twoSum } from '../main/[1]-two-sum'
describe('Two Sum', () => {
  /**
     * Given nums = [2, 7, 11, 15], target = 9,
     * Because nums[0] + nums[1] = 2 + 7 = 9,
     * return [0, 1].
     */
  it('should return [0, 1]', () => {
    const nums: Array<number> = [2, 7, 11, 15];

    expect(twoSum(nums, 9)).toEqual([0, 1]);
  })
});
