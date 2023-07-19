const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(`Min element is ${ages[0]} and max element is ${ages[ages.length-1]}`);
const middle = ages.length/2;
let middleAge;
if(middle%2!=0){
    middleAge = ages[middle];
}
else
    middleAge = (ages[middle] + ages[middle+1])/2;
console.log(middleAge);
let sum = ages.reduce(function(a, b){
    return a + b;
  });
  
const averageAge = sum / ages.length;
console.log(averageAge);
const rangeOfAges = ages[ages.length-1] - ages[0];
console.log(rangeOfAges);
const minAndAverageDifference = ages[0] - averageAge;
const maxAndAverageDifference = ages[ages.length-1] - averageAge;
if(Math.abs(minAndAverageDifference)>Math.abs(maxAndAverageDifference)){
    console.log(`${Math.abs(minAndAverageDifference)} > ${Math.abs(maxAndAverageDifference)}`)
}
else if(Math.abs(minAndAverageDifference)<Math.abs(maxAndAverageDifference)){
    console.log(`${Math.abs(minAndAverageDifference)} < ${Math.abs(maxAndAverageDifference)}`)}
else
console.log("equal");