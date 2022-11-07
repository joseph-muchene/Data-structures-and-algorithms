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
    console.log(secondArr)
}

merge([3, 4, 7], [2, 5]);
