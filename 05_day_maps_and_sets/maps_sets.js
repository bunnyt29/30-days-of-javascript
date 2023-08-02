const arr = []
for(let i = 1; i<=10; i++){
    arr.push(i);
}
console.log(arr);
const numbers = new Set(arr);
numbers.delete(1)
console.log(numbers.size)
numbers.clear();
console.log(numbers)


const stringArr = ['Hendy', 'Lina', 'Lukas', 'Kella', 'Niko'];
const names = new Set(stringArr);

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
const map = new Map(countries)