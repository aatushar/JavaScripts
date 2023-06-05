// #1 prime Number
function generatePrimeNumber(start, end) {
    for (let num = start; num <= end; num++) {
      let isPrime = true;
  
      // Check if the number is divisible by any number less than itself
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        return num;
      }
    }
  
    return null; 
  }
  
//   // Usage example
//   const startNumber = 10;
//   const endNumber = 50;
//   const primeNumber = generatePrimeNumber(startNumber, endNumber);
  
//   if (primeNumber) {
//     console.log(`Prime number found: ${primeNumber}`);
//   } else {
//     console.log('No prime number found in the range.');
//   }
//   #2
//   function factorial(num) {
//     if (num === 0 || num === 1) {
//       return 1;
//     }
  
//     let result = 1;
//     for (let i = 2; i <= num; i++) {
//       result *= i;
//     }
  
//     return result;
//   }
//   #3
//   function findMaxMin(num1, num2, num3) {
//     const max = Math.max(num1, num2, num3);
//     const min = Math.min(num1, num2, num3);
  
//     return {
//       max: max,
//       min: min
//     };
//   }
  
//   // Usage example
//   const number1 = 10;
//   const number2 = 5;
//   const number3 = 8;
//   const result = findMaxMin(number1, number2, number3);
//   console.log(`Maximum number: ${result.max}`);
//   console.log(`Minimum number: ${result.min}`);

//   #4
//   function sumNumbers(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
//     return sum;
//   }
  
//   // Usage example
//   const numbers = [2, 4, 6, 8, 10];
//   const result = sumNumbers(numbers);
//   console.log(`Sum of the numbers: ${result}`);