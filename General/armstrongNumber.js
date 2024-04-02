// Check the armstrong number

function armstrongNum(num) {
    let sum = 0;
    let count = 0;
    const originalNum = num;
    let temp = num;

    while(num > 0) {
        let lastDigit = num % 10;
        count++;
        num = (num - lastDigit) / 10;
    }
    while(temp > 0) {
        let lastDigit = temp % 10;
        sum = sum + Math.pow(lastDigit,count)
        temp = (temp - lastDigit) / 10;
    }
    
    return sum === originalNum;
}

console.log('its a armstrong number:',armstrongNum(35));
console.log('its a armstrong number:',armstrongNum(371));
console.log('its a armstrong number:',armstrongNum(1634));


// Using string
function isArmstrongNumber(number) {
    const numStr = number.toString();
    const numDigits = numStr.length;
    
    let sum = 0;
    
    for (let digit of numStr) {
        digit = parseInt(digit);

        sum += Math.pow(digit, numDigits);
    }

    if (sum === number) {
        return true; 
    } else {
        return false;
    }
}


const number = 1634;
if (isArmstrongNumber(number)) {
    console.log(number + " is an Armstrong number.");
} else {
    console.log(number + " is not an Armstrong number.");
}
