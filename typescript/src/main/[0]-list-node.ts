export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
  toString(): string {
    if (this.next === null) {
      return this.val + ''
    } else {
      return this.val + ' -> ' + this.next.toString()
    }
  }
}