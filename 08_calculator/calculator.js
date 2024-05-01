const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, currentValue) => total + currentValue, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, currentValue) => total * currentValue, 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  let result = 1;
  if (n === 0) {
    result = 1;
  }
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
