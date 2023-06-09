const bt = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: {
        value: 8,
        left: null,
        right: null,
      },
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
};

function Node(value, left, right) {
  this.value = value
  this.left = left || null
  this.right = right || null
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)
const node6 = new Node(6)
const node7 = new Node(7)
const node8 = new Node(8)
const node9 = new Node(9)

node1.left = node2, node1.right = node3

node2.left = node4, node2.right = node5
node3.left = node6, node3.right = node7

node4.right = node8
node8.left = node9

module.exports = {
  bt,
  root: node1
};