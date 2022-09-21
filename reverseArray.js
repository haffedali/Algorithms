function reverseArray(a) {
  let newArray = [];
  for (let i = 0; i < a.length; i++) {
    newArray.unshift(a[i]);
  }
  return newArray;
}

module.exports = reverseArray;
