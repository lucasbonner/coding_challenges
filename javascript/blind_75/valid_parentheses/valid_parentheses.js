var isValid = function(s) {
  let stack = [];
  const associater = {
    '(' : ')',
    '[' : ']',
    '{' : '}',
  }

  for (let i = 0; i < s.length; i++) {
    if (Object.keys(associater).includes(s[i])) {
      stack.push(s[i]);
      continue;
    }

    let stackLastElement = stack[ stack.length - 1 ]
    if (associater[stackLastElement] === s[i]) {
      stack.pop();
      continue;
    }
    return false;
  }

  return stack.length === 0;
};

console.log(isValid("()")) //true
console.log(isValid("()[]{}")) //true
console.log(isValid("(]")) //false
