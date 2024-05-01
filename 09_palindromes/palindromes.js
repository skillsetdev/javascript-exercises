const palindromes = function (text) {
  const alphaNumerical = "abcdefghijklmnopqrstuvwxyz1234567890";
  let cleanText = text
    .toLowerCase()
    .split("")
    .filter((letter) => alphaNumerical.includes(letter))
    .join("");
  let forwardText = cleanText;
  let reverseText = cleanText.split("").reverse().join("");
  return forwardText === reverseText;
};

// Do not edit below this line
module.exports = palindromes;
