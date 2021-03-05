
function fizzBuzz(i) {
  if (i % 15 === 0) {
    return 'FizzBuzz';
  } else if (i % 3 === 0) {
    return 'Fizz';
  } else if (i % 5 === 0) {
    return 'Buzz';
  } else {
    return i;
  }
}

// Use this console log to test FizzBuzz function only, for the counter use one below 
// console.log(fizzBuzz(45))

const fizzBuzzCounter = function(n) {
  for (let i = 1; i <= n; i++) {
    console.log(fizzBuzz(i))
  }
}

console.log(fizzBuzzCounter(111))