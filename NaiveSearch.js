function NaiveSearch(long, short) {
  let count = 0;
  for (let x = 0; x < long.length ; x++) {
    for (let y = 0; y < short.length ; y++) {
     
       if (long[x] === short[y+1] && long[x] === short[short.length - 1]) {
        console.log("found")
        count++;
      }
    }
  }
  return count;
}

console.log(NaiveSearch("people", "peo"));
