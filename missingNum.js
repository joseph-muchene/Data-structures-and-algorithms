function missingNumber(array) {
  let max_count = 0;
  let diffrence;
  for (let x = 0; x < array.length; x++) {
    max_count += array[x];
  }
  // get max at a given range

  let max = 0;

  for (let y = 0; y <= Math.max(...array); y++) {
    max = max + y;
  }
  diffrence = max - max_count;

  return diffrence;
}

console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
