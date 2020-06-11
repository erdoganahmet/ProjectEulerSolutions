function isCurious(n, d) {
    if (n % 10 !== Math.floor(d / 10)) return false;
    return (n * (d % 10)) === (d * Math.floor(n / 10));
  }
  
  function findCuriousFractions(min, max) {
    var fractions = [];
    var i, j;
    for (i = min; i <= max; i++) {
      if (i % 10 === 0 || i % 11 === 0) continue;
      for (j = min; j <= max; j++) {
        if (j === i || j % 10 === 0 || j % 11 === 0) continue;
        if (isCurious(i, j)) {
          fractions.push([i, j]);
        }
      }
    }
    return fractions;
  }
  
  console.log(findCuriousFractions(10, 99));