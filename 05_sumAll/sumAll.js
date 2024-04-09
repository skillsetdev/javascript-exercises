const sumAll = function (firstNum, lastNum) {
  let outputNum = 0;
  let smallerNum;
  let largerNum;
  if (
    lastNum < 0 ||
    firstNum < 0 ||
    typeof lastNum !== "number" ||
    typeof firstNum !== "number"
  ) {
    return "ERROR";
  }
  if (firstNum < lastNum) {
    smallerNum = firstNum;
    largerNum = lastNum;
  } else {
    smallerNum = lastNum;
    largerNum = firstNum;
  }
  for (let i = smallerNum; i <= largerNum; i++) {
    outputNum += i;
  }
  return outputNum;
};

// Do not edit below this line
module.exports = sumAll;
