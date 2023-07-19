const month = prompt("Enter the month.").toString().toLowerCase();
if ( month == "january" || month == "march" || month == "may" || month == "july" || month == "august" || month == "october" || month == "december"){
    console.log("31 days")
}
else if ( month == "february"){
    console.log("28 days")
}
else if(month == "april" || month == "june" || month == "september" || month == "november") {
    console.log("30 days");
}
else
console.log("It's not a month");