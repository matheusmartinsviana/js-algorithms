function primeNumber(num) {
  if (num <= 1) return false;

  for (var divisor = 2; divisor < num; divisor++) {
    if (num % divisor == 0) return false;

    return true;
  }
}

var determinadoNumero = 7;

console.log(primeNumber(determinadoNumero));
