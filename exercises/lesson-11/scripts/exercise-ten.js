function printFizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log('FizzBuzz');
  }
  else if (number % 3 === 0) {
    console.log('Fizz');
  }
  else if (number % 5 === 0) {
    console.log('Buzz');
  }
  else {
    console.log(number);
  }
}

function fizzBuzz(numberOfIteratoin) {
  for (let i = 1; i <= 20; i++) {
    printFizzBuzz(i);
  }
}

fizzBuzz(20);