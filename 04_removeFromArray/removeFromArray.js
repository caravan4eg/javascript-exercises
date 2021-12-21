const removeFromArray = function (arr, ...theItems) {
  for (var i = 0; i < theItems.length; i++) {
      let item = theItems[i];
    for (let j = arr.length; j >= 0; j--) {
      if (arr[j] === item) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
