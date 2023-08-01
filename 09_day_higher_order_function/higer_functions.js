//Callback

const callback = (n) => {
    return n ** 2
}

// function that takes other function as a callback
  function cube(callback, n) {
    return callback(n) * n
 }

 console.log(cube(callback, 3))

 //Returning function
const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 2 * n + 3 * m + t
      }
      return doWhatEver
    }
    return doSomething
  }
  console.log(higherOrder(2)(3)(10))


const numbers = [1, 2, 3, 4, 9]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))

//forEach
let sum = 0;
const number = [1, 2, 3, 4, 5];
number.forEach(num => console.log(num))
console.log(sum)

//Map
const array = [1, 2, 3, 4, 5]
const numbersSquare = array.map((num) => num * num)

console.log(numbersSquare)