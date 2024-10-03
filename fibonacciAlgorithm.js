x = 0;
y = 1;
let fibonacci = [0, 1];

function getFibonacci(n) {
  for (let i = 2; i < n; i++) {
    // initiaze with 2 because I created the fibonacci array with 2 position set default [0, 1]
    thirdNumber = x + y;
    x = y;
    y = thirdNumber;
    fibonacci.push(thirdNumber);
  }
}

getFibonacci(6);

console.log(fibonacci);
