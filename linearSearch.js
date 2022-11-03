// write a function that accepts an array and a value
// loop through the array and check if the current array element is equal to the value
// if it is return the index at which the element is found
// if the value is never found return -1

function findMatch(arr, value) {
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] === value) return x;
  }
  return -1;
}
// Big 0 == o(n)
console.log(findMatch([1, 3, 4, 0], 0));
