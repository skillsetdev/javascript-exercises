const fibonacci = function (a) {
  if (a < 0) {
    return "OOPS";
  } else if (a == 0) {
    return 0;
  }
  let fibonacciNums = [1, 1];
  lastNum = 0;
  for (let i = 2; i < a; i++) {
    lastNum = fibonacciNums[i - 1] + fibonacciNums[i - 2];
    fibonacciNums.push(lastNum);
  }
  return fibonacciNums[a - 1];
};
// Do not edit below this line
module.exports = fibonacci;
