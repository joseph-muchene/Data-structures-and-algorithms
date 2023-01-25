let r = [];
function LinearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }

  return -1;
}

console.log(LinearSearch([1, 4, 4, 6], 1 ));
