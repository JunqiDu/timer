const timer1 = function (number) {
  if (number === undefined) {
    return 'nothing';
  } else if (number <= 0) {
    return 'nagative number';
  } else if (isNaN(number)) {
    return 'not a number';
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, number * 1000);
  }
}

console.log(timer1(10));