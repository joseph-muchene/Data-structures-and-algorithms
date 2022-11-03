function sum(num) {
  // base case
  if (num === 1) return 1;
  return num + sum(num - 1);
}

console.log(sum(40));

//

// function collectOddNumbers(arr) {
//   let collected = [];

//   function helper(input) {
//     if (input.length === 0) return;
//     if (input[0] % 2 !== 0) {
//       collected.push(input[0]);
//     }
//     helper(input.splice(1));
//   }
//   helper(arr);

//   return collected;
// }

// console.log(collectOddNumbers([1, 2, 4, 5, 6, 7, 8, 9]));

function pureRecursion(arr) {
  let collectedNums = [];

  // check if the length of the array is not equal to zero

  if (arr.length === 0) return [];

  // check the modulus is not equal to zero
  if (arr[0] % 2 !== 0) {
    // create a new array with values
    collectedNums.push(arr[0]);
  }
  collectedNums = collectedNums.concat(pureRecursion(arr.splice(1)));
  return collectedNums;
}

console.log(pureRecursion([1, 1, 2, 4, 5, 6, 7]));

// get factorial

function factorial(num) {
  if (num === 1) return 1;

  return num * factorial(num - 1);
}

console.log(factorial(4));

// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]
function range(n1, n2) {
  let nums = [];
  for (let z = ++n1; z < n2; z++) {
    nums.push(z);
  }
  return nums;
}
function FactorialRange(n1, n2) {
  let result = [];
  if (n1 === n2 - 1) return [];

  result.push(n1 === n1 ? n1 + 1 : n1);

  result = result.concat(FactorialRange(n1 + 1, n2));

  return result;
}
console.log(FactorialRange(3, 10));


// sum of intergers
function sum(n){
    if (n===1 ) return 1
    return n + sum(n-1)

}
console.log(sum(10))

// . Write a JavaScript program to compute the exponent of a number. Go to the editor
// Note : The exponent of a number says how many times the base number is used as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

function computeExponent(argument,base){

   if(base === 0) return 1

   return argument * computeExponent(argument, base - 1)
}
console.log(computeExponent(5,2))





