const reverseString = function (text) {
  let textArray = text.split("");
  let output = "";
  for (let i = textArray.length - 1; i >= 0; i--) {
    output += textArray[i];
  }
  return output;
};

// Do not edit below this line
module.exports = reverseString;
