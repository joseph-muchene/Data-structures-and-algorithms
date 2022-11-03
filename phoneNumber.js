function createPhoneNumber(numbers) {
  let phone = [];
  let formatted = "";
  for (let x = 0; x < numbers.length; x++) {
    phone[x] = numbers[x];
  }
  let p = phone.join("");
  let value = "";
  function first() {
    let fval = [];
    for (let y = 0; y < 3; y++) {
      fval.push(p[y]);
    }
    return (value += "(" + fval.join("") + ")");
  }
  first();

  let svalue = "";
  function second() {
    let secondVal = [];
    for (let y = 3; y < numbers.length; y++) {
      if (y === 5) {
        secondVal.push(`${p[5]}-`);
      }
      if (y !== 5) {
        secondVal.push(p[y]);
      }
    }
    return (svalue += secondVal.join(""));
  }
  second();
  formatted += value + " " + svalue;

  return formatted;
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
