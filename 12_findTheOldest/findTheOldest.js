const findTheOldest = function (arr) {
  let orderedArr = arr.sort(function (a, b) {
    aYearOfDeath =
      "yearOfDeath" in a ? a.yearOfDeath : new Date().getFullYear();
    bYearOfDeath =
      "yearOfDeath" in b ? b.yearOfDeath : new Date().getFullYear();
    if (aYearOfDeath - a.yearOfBirth > bYearOfDeath - b.yearOfBirth) {
      return -1;
    } else {
      return 1;
    }
  });
  return orderedArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
