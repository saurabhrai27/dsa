// Find the gcd of two numbers

function findGCD(num1, num2) {
    let minNum = Math.min(num1, num2)

    for(let i = minNum; i >= 1; i--){
        if(num1 % i === 0 & num2 % i === 0) {
            return i
        }
    }
}

console.log("The GCD of the two numbers is ", findGCD(4,8))

// Using Euclidean’s theorem

function findGCDOptimal(a, b) {
    if (b == 0) {
        return a;
      }
      return findGCDOptimal(b, a % b);
}
console.log("The GCD of the two numbers Using Euclidean’s theorem is ", findGCDOptimal(4,8))