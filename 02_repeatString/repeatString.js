const repeatString = function (phrase, times) {
  if (times < 0) {
    return "ERROR";
  }
  let phraseArray = new Array();
  for (let i = 1; i <= times; i++) {
    phraseArray.push(phrase);
  }
  return phraseArray.join("");
};

// Do not edit below this line
module.exports = repeatString;
