/*+    -    *    /   ^,   !,    (,    ), \0*/
let op = ['=', '=', '<', '<', '<', '<', '<', '>', '>',
  '=', '=', '<', '<', '<', '<', '<', '>', '>',
  '>', '>', '=', '=', '<', '<', '<', '>', '>',
  '>', '>', '=', '=', '<', '<', '<', '>', '>',
  '>', '>', '>', '>', '=', '<', '<', '>', '>',
  '>', '>', '>', '>', '>', '=', ' ', '>', '>',
  '<', '<', '<', '<', '<', '<', '<', '=', ' ',
  ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
  '<', '<', '<', '<', '<', '<', '<', ' ', '='
]
// 9中操作符
const COUNT = 9;
// 初始化优先级矩阵
let priMatrix = new Array(COUNT).fill(0);
for (let i = 0; i < COUNT; i++) {
  priMatrix[i] = op.slice(i * COUNT, (i + 1) * COUNT)
}

// 计算a2 op_top a1, 结果入栈operand
function cal(a1, a2, op_top, operand) {
  switch (op_top) {
    case '+':
      a1 += a2;
      operand.push(a1)
      break;
    case '-':
      a1 -= a2;
      operand.push(a1)
      break;
    case '*':
      a1 *= a2;
      operand.push(a1)
      break;
    case '/':
      if (a2 === 0) {
        throw new Error('divide by 0');
      }
      a1 /= a2;
      operand.push(a1)
      break;
    default: break
  }
}

// 直接计算中缀表达式
function calculateInffix(str) {
  let len = str.length;
  let op = ["+", "-", "*", "/", "^", "!", "(", ")", ""];
  // // 操作符
  let operator = []
  // // 操作数
  let operand = []
  for (let i = 0; i < len; i++) {
    let s = str[i]
    // 操作数直接入oprand栈
    if (op.indexOf(s) === -1) {
      operand.push(parseInt(s));
    }
    else {
      // 操作符oprator栈为空或栈顶为'('或当前扫描到'(', 入栈
      if (operator.length === 0 || operator[operator.length - 1] === '(' || s === '(') {
        operator.push(s);
      }
      else {
        // 扫描到')', 弹出一个操作符两个操作数，将运算结果入oprand栈，直到operator栈顶为'('
        if (s === ')') {
          let op_top = operator.pop();
          while (op_top !== '(') {
            let a2 = operand.pop();
            let a1 = operand.pop();
            // to continue
            cal(a1, a2, op_top, operand);
            op_top = operator.pop();
          }
        }
        else {
          let cur = op.indexOf(s), top = op.indexOf(operator[operator.length - 1]);
          if (priMatrix[cur][top] === '>') {
            operator.push(s);
          }
          else {
            let op_top = operator.pop()
            let a2 = operand.pop();
            let a1 = operand.pop();
            // to continue
            cal(a1, a2, op_top, operand);
            i--;
          }
        }
      }
    }
  }
  while (operator.length !== 0) {
    let s = operator.pop()
    let a2 = operand.pop();
    let a1 = operand.pop();
    // to continue
    cal(a1, a2, s, operand);
  }
  return operand.pop();
}

// 中缀转后缀
function toSuffix(str) {
  let len = str.length;
  let op = ['+', '-', '*', '/', '^', '!', '(', ')', '']
  // s1运算符栈, s2中间结果栈
  let s1 = [], s2 = [];
  let i = 0;
  while (i < len) {
    let s = str[i];
    if (op.indexOf(s) === -1) {
      s2.push(s);
    }
    else {
      // 2.2.1 2.2.2
      if (s1.length === 0 || s1[s1.length - 1] === '(' || s === '(') {
        s1.push(s);
      }
      else {
        // 2.2.3
        if (s === ')') {
          let s1_top = s1.pop();
          while (s1_top !== '(') {
            s2.push(s1_top);
            s1_top = s1.pop();;
          }
        }
        // 2.2.4
        else {
          let cur = op.indexOf(s), top = op.indexOf(s1[s1.length - 1]);
          if (priMatrix[cur][top] === '>') {
            s1.push(s);
          }
          else {
            s2.push(s1.pop());
            i--;
          }
        }
      }
    }
    i++;
    // console.log(i, s1, s2)
  }
  while (s1.length !== 0) {
    s2.push(s1.pop());
  }
  return s2;
}
// 计算后缀表达式
var evalRPN = function (tokens) {
  let op = ["+", "-", "*", "/"];
  let stack = [];
  let len = tokens.length, i = 0;
  while (i < len) {
    if (op.indexOf(tokens[i]) === -1) {
      stack.push(parseInt(tokens[i]));
    } else {
      let a1 = stack.pop();
      let a2 = stack.pop();
      if (tokens[i] === "+") {
        a1 = a2 + a1;
        stack.push(a1);
      }
      if (tokens[i] === "-") {
        a1 = a2 - a1;
        stack.push(a1);
      }
      if (tokens[i] === "*") {
        a1 = a2 * a1;
        stack.push(a1);
      }
      if (tokens[i] === "/") {
        a1 = parseInt(a2 / a1);
        stack.push(a1);
      }
    }
    i++;
  }
  return stack.pop();
};
// 计算中缀表达式，先中缀转后缀，再计算后缀表达式
function calculateSuffix(str) {
  let suffix = toSuffix(str);
  console.log('suffix', suffix)
  return evalRPN(suffix.join(''));
}

// let str = '1+2*3-4';          // 1 2 3 * + 4 -
// let str = '1+((2+3)*4)-5'    // 1 2 3 + 4 * + 5 -
// let str = '2*(2+3)-8/2'         // 2 2 3 + * 8 2 / -
let str = '8/4*2+4/(5-3)*3'
console.log(str)
console.log(calculateInffix(str))
console.log(calculateSuffix(str))