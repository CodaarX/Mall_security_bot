// Shopping mall security bot

// instantiate and define  variables

var customerName = prompt(input['What is your name?']);
var customerGender = prompt(input['What is your gender?']);
var customerAge = prompt(input['what is your age?'])
var maskChecker = prompt(input['Do you have a facemask on?']);
var visitorsAllowed = 0;
var visitorsDenied = 0;
var maleVisitors = 0;
var femaleVisitors = 0;
var rejectedmaleVisitors = 0;
var rejectedfemaleVisitors = 0;


// check if customers wear masks and if customers are 12 years and older

if (maskChecker === 'yes' && customerAge >= 12){
    console.log('welcome to Mike El Plaza', + customerName)
    // count visitors allowed and count if visitors are males or females
    visitorsAllowed = visitorsAllowed++
    if(customerGender === "male"){
        allowedmaleVisitors = allowedmaleVisitors++
    } else {
        allowedfemaleVisitors = allowedfemaleVisitors++}
}

// check if customers wear masks and if customers are younger than 12 years

if (maskChecker === 'yes' && customerAge <= 12){
    console.log(customerName, + 'you must be 12 years or older to enter Mike El Plaza')
    // count rejected visitors and count if visitors are males or females
    visitorsDenied = visitorsDenied++
    if(customerGender === "male"){
        rejectedmaleVisitors = rejectedmaleVisitors++
    } else {
        rejectedfemaleVisitors = rejectedfemaleVisitors++}
}


// check if customers wear masks and if customers are younger than 12 years


if (maskChecker === 'no' ){
    console.log(customerName, + 'you have been denied entry into enter Mike El Plaza for users without a facemask')
    // count recectors visitors allowed and count if visitors are males or females
    visitorsDenied = visitorsDenied++
    if(customerGender === "male"){
        rejectedmaleVisitors = rejectedmaleVisitors++
    } else {
        rejectedfemaleVisitors = rejectedfemaleVisitors++}
}


// log to the console all results

console.log('Number of rejected female visitors: ', rejectedfemaleVisitors)
console.log('Number of rejected male visitors: ', rejectedmaleVisitors)
console.log('Number of allowed female visitors: ', allowedfemaleVisitors)
console.log('Number of allowed male visitors: ', allowedmaleVisitors)

