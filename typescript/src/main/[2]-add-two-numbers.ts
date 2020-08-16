import { ListNode } from './[0]-list-node';
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let first = 0;
  let second = 0;
  if (l1 === null && l2 === null) return null;
  if (l1 !== null) {
    first = l1.val;
  }
  if (l2 !== null) {
    second = l2.val;
  }
  const result = first + second;
  let nextL1 = l1 ? l1.next : null;
  let nextL2 = l2 ? l2.next : null;
  if (result < 10) {
    return new ListNode(result, addTwoNumbers(nextL1, nextL2));
  } else {
    const extraData = parseInt(result / 10 + '');
    if (nextL1 !== null) {
      nextL1.val = nextL1.val + extraData;
    } else if (nextL2 !== null) {
      nextL2.val = nextL2.val + extraData;
    } else {
      nextL1 = new ListNode(extraData, null);
    }
    return new ListNode(result % 10, addTwoNumbers(nextL1, nextL2));
  }
};