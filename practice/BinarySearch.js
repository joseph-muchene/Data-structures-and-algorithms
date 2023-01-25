const BinarySearch = (arr, val) => {
  var start = 0;
  var end = arr.length - 1;

  var middle = Math.floor((start + end) / 2);

  while (start <= end && arr[middle] !== val) {
    if (val < arr[middle]) {
      end = middle - 1;
    } else if (val !== arr[middle] && middle === arr.length - 1) {
      return -1;
    } else {
      start = middle + 1;
    }

    middle = Math.floor((start + end) / 2);
  }

  return middle;
};

console.log(BinarySearch([1, 2, 4, 5, 6], 2));
