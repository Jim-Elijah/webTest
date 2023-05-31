/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//  var addTwoNumbers = function (l1, l2) {
//   let h = new ListNode();
//   let p = h, p1 = l1, p2 = l2;
//   let carry = 0, sum;
//   while (p1 && p2) {
//     sum = p1.val + p2.val + carry;
//     carry = parseInt(sum / 10);
//     p.next = new ListNode();
//     p = p.next;
//     p.val = sum % 10;
//     p1 = p1.next, p2 = p2.next;
//   }
//   while (p1) {
//     sum = p1.val + carry;
//     carry = parseInt(sum / 10);
//     p.next = new ListNode();
//     p = p.next;
//     p.val = sum % 10;
//     p1 = p1.next;
//   }
//   while (p2) {
//     sum = p2.val + carry;
//     carry = parseInt(sum / 10);
//     p.next = new ListNode();
//     p = p.next;
//     p.val = sum % 10;
//     p2 = p2.next;
//   }
//   console.log(h.next, p)
//   if (carry) {
//     p.next = new ListNode();
//     p = p.next;
//     p.val = carry;
//   }
//   return h.next;
// }

var addTwoNumbers = function (l1, l2) {
  let h = new ListNode();
  let p = h, p1 = l1, p2 = l2;
  let carry = 0, sum, v1, v2;
  while (p1 || p2) {
    v1 = p1 ? p1.val : 0;
    v2 = p2 ? p2.val : 0;
    sum = v1 + v2 + carry;
    carry = parseInt(sum / 10);
    p.next = new ListNode(sum % 10);
    p = p.next;
    if (p1) {
      p1 = p1.next;
    }
    if (p2) {
      p2 = p2.next;
    }
  }
  // console.log(h.next, p)
  if (carry) {
    p.next = new ListNode(carry);
  }
  return h.next;
}