// 8,2,4,5,78,

function InsertionSort(arr) {
  let i, j, key;
  for (i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log(InsertionSort([10, 9, 8, 7, 2]));
