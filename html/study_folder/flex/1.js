function Node(val) {
  this.val = val
  this.next = null
}
function hasLoop(head) {
  
  let p1 = head, p2 = new Node()
  p2.next = head
  while (p2) {
    p2 = p2.next.next
    p1 = p1.next
    if (p2 == null) {
      return false
    }
    if (p1.val == p2.val) {
      return true
    }
  }
  return false
}

let n1 = new Node(1)
let n2 = new Node(2)
let n3 = new Node(3)
let n4 = new Node(4)
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n1
console.log(hasLoop(n1))