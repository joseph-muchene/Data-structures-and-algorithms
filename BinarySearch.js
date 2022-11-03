// only works on sorted arrays
// Divide and conquer idea

// formular to get the middle value mid = low + (high-low) / 2

// [1,2,4,5,6,7,8,9,10] mid = 0 + (8-0) / 2
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}
console.log(binarySearch([1, 2,4,5,6,7,8,9], 7));
