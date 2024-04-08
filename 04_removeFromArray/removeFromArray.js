const removeFromArray = function (givenArray, ...toRemove) {
  let outputArray = givenArray;
  function removeSimilarItem(itemToRemove) {
    outputArray = outputArray.filter((item) => item !== itemToRemove);
  }

  toRemove.forEach(removeSimilarItem);
  return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
