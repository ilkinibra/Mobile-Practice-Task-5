function makePlusFunction(num) {
    return function(x) {
      return num + x;
    };
  }
  
  const plusTen = makePlusFunction(10);
  const plusFive = makePlusFunction(5);

  console.log(plusFive(0))
  console.log(plusTen(0))
  console.log(plusFive(plusTen(0)));