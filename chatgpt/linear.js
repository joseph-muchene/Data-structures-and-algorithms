// search for a value
function linearSearch(arr, value) {
  // iterate over the array

  // if value is found return its index

  for (let x = 0; x < arr.length; x++) {
    if (arr[x] === value) {
      console.log("FOUND");
      return x;
    }
  }

  return -1;
}
// console.log(linearSearch([2, 3, 5, 6, 7], 7));

function BinarySearch(arr, value) {
  let low = 0;
  let high = arr.length - 1;

  //   check the new middle is not equal to the value

  while (low <= high) {
    let newMiddle = Math.floor((low + high) / 2);
    if (arr[newMiddle] === value) return newMiddle;
    else if (arr[newMiddle] < value) {
      low = newMiddle + 1;
    } else {
      high = newMiddle - 1;
    }
  }
  return -1;
}

console.log(BinarySearch([2, 3, 5, 6, 7], 7));
