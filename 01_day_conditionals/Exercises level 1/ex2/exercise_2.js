const myAge = 16;
const yourAge = prompt("Enter your age:");

if(myAge>yourAge){
    console.log(`You are ${myAge-yourAge} years younger than me.`)
}
else if(myAge<yourAge){
    console.log(`You are ${yourAge-myAge} years older than me.`)
}
else
console.log("We are on the same age.");
