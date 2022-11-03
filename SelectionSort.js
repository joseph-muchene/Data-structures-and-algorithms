// 8,7,6,5,4,3,2,1
function SelectionSort(arr) {
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr.length; y++) {
      if (arr[y] > arr[y + 1]) {
        let temp = arr[y + 1];
        arr[y+1] = arr[y];
        arr[y] = temp;
      }
    }
  }
  return arr;
}


console.log(SelectionSort([20,10,8,7,2]))