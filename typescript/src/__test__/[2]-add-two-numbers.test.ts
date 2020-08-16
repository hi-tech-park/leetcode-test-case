
import { addTwoNumbers } from '../main/[2]-add-two-numbers'
import { ListNode } from '../main/[0]-list-node'
describe('Add Two Numbers', () => {
  /**
     * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
     * Output: 7 -> 0 -> 8
     * Explanation: 342 + 465 = 807.
     */
  it('should return 7 -> 0 -> 8', () => {
    const first: ListNode = new ListNode(2, new ListNode(4, new ListNode(3, null)))
    const second: ListNode = new ListNode(5, new ListNode(6, new ListNode(4, null)))
    expect(addTwoNumbers(first, second)?.toString()).toBe('7 -> 0 -> 8')
  })

  /**
   * Input: (9) + (9)
   * Output: 8 -> 1
   * Explanation: 342 + 465 = 807.
   */
  it('should return 8 -> 1', () => {
    const first: ListNode = new ListNode(9, null)
    const second: ListNode = new ListNode(9, null)
    expect(addTwoNumbers(first, second)?.toString()).toBe('8 -> 1')
  })
});
