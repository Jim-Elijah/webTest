/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//  var hasCycle = function(head) {
//   let p1 = p2 = head;
//   while(p1 && p2 && p2.next){
//     p1 = p1.next;
//     p2 = p2.next.next;
//     if(p1 === p2){
//       // console.log(p1.val, p2.val);
//       return true;
//     }
//   }
//   return false;
// };


// var hasCycle = function(head) {
//   let p1 = p2 = head;
//   while(p1 && p2){
//     p1 = p1.next;
//     p2 = p2.next ? p2.next.next : null;
//     if(p1 === p2 && p1 !== null){
//       // console.log(p1.val, p2.val);
//       return true;
//     }
//   }
//   return false;
// };

var hasCycle = function (head) {
  let s = new Set();
  let p = head;
  while (p) {
    if (s.has(p)) {
      return true;
    }
    s.add(p);
    p = p.next;
  }
  return false
}