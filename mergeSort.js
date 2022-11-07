function merge(left, right) {
  let secondArr = [];
  while (left.length && right.length) {
    // insert the smallest element to the secondArray
    if (left[0] < right[0]) {
      secondArr.push(left.shift());
    } else {
      secondArr.push(right.shift());
    }
  }
  // use spread operator and create a new array,combininig the three arrays
  return [...secondArr, ...left, ...right];
}

// console.log(merge([3, 4, 7], [2, 5]));
// create a merging function
// [3,5,7],[2,3,4]
// function merging(left, right) {
//   let sortedArr = [];

//   while (left.length && right.length) {
//     if (left[0] > right[0]) {
//       sortedArr.push(right.shift());
//     } else {
//       sortedArr.push(left.shift());
//     }
//   }
//   return [...sortedArr, ...left, ...right];
// }

// console.log(merging([4,5,7],[2,3]))

// with that, you have the merge() function for the merge sort ready.. Now you only need a function that splits an array into 1 size.

// here is an example of the mergeSort() function

function mergeSort(arr) {
  const half = arr.length / 2;
  console.log("half", half);
  console.log("arr", arr);
  // the base case is array.length <= 1

  if (arr.length <= 1) return arr;

  const left = arr.splice(0, half);
  console.log("chopped", left);
  const right = arr;

  return merge(mergeSort(left), mergeSort(right));
}
// console.log(mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));

// function mergingSort(arr) {
//   let left, right, middle;
//   middle = Math.floor(arr.length / 2);
//   if (arr.length <= 1) return [];

//   left = arr.splice(0, middle);
//   right = arr;

//   return merge(mergingSort(left), mergingSort(right));
// }
