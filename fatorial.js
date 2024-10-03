function factorialize(num) {
  if (num === 0 || num === 1) return 1; // fatorial number always return 1
  for (let i = num - 1; i >= 1; i--) {
    // num = 5, so i gonna be like: [4, 3, 2, 1]
    num *= i;
  }
  return num;
}

console.log(factorialize(5));
