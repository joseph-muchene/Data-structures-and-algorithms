// [1,3,45,5,6,7]
// [1,3,5,6,7,45]
function BubbleSort(arr) {
  for (let x = arr.length; x > 0; x--) {
    for (let y = 0; y < x - 1; y++) {
      console.log(arr[y], arr[y + 1]);
      if (arr[y] > arr[y + 1]) {
        var temp = arr[y];
        // swap
        arr[y] = arr[y + 1];
        arr[y + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(BubbleSort([1, 3, 45, 5, 6, 7]));
