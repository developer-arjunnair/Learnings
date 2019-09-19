const pow = (a, b) => {
  if (b < 0) {

  }
  return b === 1 ? a : a * pow(a, --b);

};

const calculatePow = (a, b) => {
  if (b === 0) {
    return 1;
  }
  const isPowerNegative = b < 0;
  if (isPowerNegative) {
    b *= -1;
  }
  return isPowerNegative ? 1 / pow(a, b) : pow(a, b);
}

console.log(calculatePow(-4, 2));
console.log(calculatePow(5, 10));
console.log(calculatePow(5, -3));
