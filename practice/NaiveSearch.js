function naiveSearch(long, short) {
  var count = 0;
  for (var l = 0; l < long.length; l++) {
    for (var q = 0; q < short.length; q++) {
      if (short[q] !== long[l + q]) {
      
        break;
      }
      if (q === short.length - 1) {
     
        count++;
      }
    }
  }
  return count;
}

console.log(naiveSearch("lorielol loled", "lol"));
