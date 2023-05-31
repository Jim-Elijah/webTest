// (4 + (13 / 5)) = 6
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

// let t = ["4", "13", "5", "/", "+"];
let t = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
console.log(evalRPN(t));