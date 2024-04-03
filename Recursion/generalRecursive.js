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
  console.log('...Factorial...');
  console.log(recursiveFactorial(0)) // 1
  console.log(recursiveFactorial(1)) // 1
  console.log(recursiveFactorial(5)) // 120

// Print your name n times
function printName(name, i, n) {
  if(i > n) return;
  console.log(name);
  printName(name, i + 1, n)
}
console.log('...print name n times...');
printName('SR', 1, 3);

// Print 1 to N using recursion
function printOneToN(i, n){
  if(i > n) return;
  console.log(i);
  printOneToN(i + 1, n)
}

console.log('....print One To N....');
printOneToN(1, 5)

// Alternate Approach for printing integers from 1 to N (using Backtracking)
function printOneToNBacktracking(n) {
  if(1 > n) return;
  printOneToNBacktracking(n - 1)
  console.log(n);
}

console.log('....print One To N Backtracking....');
printOneToNBacktracking(5)

// Print N to 1
function printNToOne(n) {
  if(1 > n) return;
  console.log(n);
  printNToOne(n-1)
}

console.log('....print N to One....');
printNToOne(5)

// Alternate Approach for printing integers from N to 1(using Backtracking)
function printNToOneBacktracking(i, n) {
  if( i > n) return;
  printNToOneBacktracking(i+1, n);
  console.log(i);
}

console.log('....print N to One Backtracking....');
printNToOneBacktracking(1,5)

// Sum of first N number
function sum_of_n_number(n) {
  if( n === 0) return 0;
  return n + sum_of_n_number(n - 1)
}

console.log('Sum of N numbers',sum_of_n_number(5));