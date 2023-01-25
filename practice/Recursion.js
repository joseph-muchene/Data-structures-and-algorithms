let max = 10;

// function SumUp(inc) {
//   if (inc == 10) {
//     return;
//   }
//   inc++;
//   console.log(inc);
//   SumUp(inc);
// }
// SumUp(0);

function sumUp(num) {
  if (num === 1) return 1;

  return num + sumUp(num - 1);
}

console.log(sumUp(3));

function factorial(num) {
  let stop = 1;
  let total = 1;
  for (let i = num; i > stop; i--) {
    total *= i;
  }

  return total;
}

// console.log(factorial(5));

function RecursiveFactorial(num) {
  // base case
  if (num === 1) return 1;

  return num * RecursiveFactorial(num - 1);
}

// console.log(RecursiveFactorial(5));

// helper method recursion

function collectOddValues(arr) {
  let result = [];

  function helperFunc(helperInput) {
    if (helperInput.length === 0) {
      return;
    } else {
      if (helperInput[0] % 2 !== 0) {
        result.push(helperInput[0]);
      }
      helperFunc(helperInput.slice(1));
    }
  }
  helperFunc(arr);
  return result;
}

console.log(collectOddValues([2, 4, 5, 6, 76, 7]));

function pureRecursion(arr) {
  let result = [];

  if (arr.length === 0) return result;

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }

  result = result.concat(pureRecursion(arr.slice(1)));

  return result;
}

console.log(pureRecursion([1, 2, 4, 5]));
