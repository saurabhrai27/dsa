function recursiveFibonacci(n) {
    if(n < 2) return n;
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

function recursiveFactorial(n) {
    if (n === 0) {
      return 1
    }
    return n * recursiveFactorial(n - 1)
  }
  
  console.log(recursiveFactorial(0)) // 1
  console.log(recursiveFactorial(1)) // 1
  console.log(recursiveFactorial(5)) // 120