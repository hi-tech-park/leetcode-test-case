export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  return null;
};

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(data: number, next: ListNode | null) {
    this.val = data;
    this.next = next;
  }
  toString(): string {
    if (this.next === null) {
      return this.val + '';
    }
    return this.val + ' -> ' + this.next.toString();
  }
}