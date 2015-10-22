// in app/main.js
 import { range, reduce, reject, reverse, toUpper } from 'ramda'

var numbers = [7, 12, 4, 51, 23]

var add = function (x, y) {
  return x + y
}

var name = 'david'

var sum = reduce(add, 0, numbers)

var isOdd = (n) => n % 2 === 1;


console.log('sum =', sum)

console.log('range =', range(5, 15).toString())

console.log('reject Odd =', reject(isOdd, numbers))

console.log('reverse =', reverse(numbers))

console.log('to Upper =', toUpper(name))
