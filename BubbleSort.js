function BubbleSort(arr) {
  for (let x = arr.length; x > 0; x--) {
    for (let y = 0; y < x - 1; y++) {
      // 4,2,5,3,1
      if (arr[y] > arr[y + 1]) {
        // swap
        let temp = arr[y];
        arr[y] = arr[y + 1];
        arr[y + 1] = temp;
      }
    }
  }
  return arr;
}
// console.log(BubbleSort([4, 5, 6, 7, 8, 9, 10, 30, 40]));

function doWhileBubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
  } while (swapped);
  {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        swapped = true;
      }
    }
    return arr;
  }
}
console.log(doWhileBubbleSort([4, 5, 6, 7, 8, 9, 10, 40, 30]));
