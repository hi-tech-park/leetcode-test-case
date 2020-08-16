
import { lengthOfLongestSubstring } from '../main/[3]-longest-substring-without-repeating-characters'
describe('Longest Substring Without Repeating Characters', () => {
  /**
     * Input: "abcabcbb"
     * Output: 3
     * Explanation: The answer is "abc", with the length of 3.
     */
  it('should return 3 when input is abcabcbb', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  })

  /**
   * Input: "bbbbb"
   * Output: 2
   * Explanation: The answer is "b", with the length of 1.
   */
  it('should return 1 when input is bbbbb', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  })

  /**
   * Input: "dvdf"
   * Output: 3
   * Explanation: The answer is "vdf", with the length of 3.
   */
  it('should return 3 when input is "dvdf"', () => {
    expect(lengthOfLongestSubstring('dvdf')).toBe(3);
  })

  /**
  * Input: "nfpdmpi"
  * Output: 5
  * Explanation: The answer is "nfpdm", with the length of 5.
  */
  it('should return 3 when input is "nfpdmpi"', () => {
    expect(lengthOfLongestSubstring("nfpdmpi")).toBe(5);
  })

  /**
  * Input: "pwwkew"
  * Output: 3
  * Explanation: The answer is "kew", with the length of 3.
  */
  it('should return 3 when input is pwwkew', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  })

  /**
  * Input: " "
  * Output: 1
  * Explanation: The answer is " ", with the length of 1.
  */
  it('should return 1 when input is  ', () => {
    expect(lengthOfLongestSubstring(' ')).toBe(1);
  })

  /**
  * Input: "aabaab!bb"
  * Output: 3
  * Explanation: The answer is "ab!", with the length of 3.
  */
  it('should return 3 when input is aabaab!bb', () => {
    expect(lengthOfLongestSubstring("aabaab!bb")).toBe(3);
  })
});
