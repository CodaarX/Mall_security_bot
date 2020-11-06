// Javascript Objects Part 2

// Shopping mall security bot

// instantiate and define  variables

var customerName = prompt('What is your name?');
var customerGender = prompt('What is your gender?');
var customerAge = prompt('what is your age?')
var hasMask = prompt('Do you have a facemask on?');
var visitorsAllowed = 0;
var visitorsDenied = 0;
var allowedfemaleVisitors = 0;
var allowedmaleVisitors = 0;
var rejectedmaleVisitors = 0;
var rejectedfemaleVisitors = 0;


// check if customers wear masks and if customers are 12 years and older

if (hasMask === 'yes' && customerAge >= 12){
    console.log('welcome to Mike El Plaza ' + customerName)
    // count visitors allowed and count if visitors are males or females
    visitorsAllowed = visitorsAllowed += 1
    if(customerGender === "male"){
        allowedmaleVisitors = allowedmaleVisitors += 1
    } else {
        allowedfemaleVisitors = allowedfemaleVisitors += 1}
}

// check if customers wear masks and if customers are younger than 12 years

if (hasMask === 'yes' && customerAge <= 12){
    console.log(customerName + ' you must be 12 years or older to enter Mike El Plaza')
    // count rejected visitors and count if visitors are males or females
    visitorsDenied = visitorsDenied += 1
    if(customerGender === "male"){
        rejectedmaleVisitors = rejectedmaleVisitors += 1
    } else {
        rejectedfemaleVisitors = rejectedfemaleVisitors += 1}
}


// check if customers wear masks and if customers are younger than 12 years


if (hasMask === 'no' ){
    console.log(customerName + ' you have been denied entry into enter Mike El Plaza for users without a facemask')
    // count recectors visitors allowed and count if visitors are males or females
    visitorsDenied = visitorsDenied += 1
    if(customerGender === "male"){
        rejectedmaleVisitors = rejectedmaleVisitors += 1
    } else {
        rejectedfemaleVisitors = rejectedfemaleVisitors += 1}
}


// log to the console all results

console.log('Number of rejected female visitors: ', rejectedfemaleVisitors)
console.log('Number of rejected male visitors: ', rejectedmaleVisitors)
console.log('Number of allowed female visitors: ', allowedfemaleVisitors)
console.log('Number of allowed male visitors: ', allowedmaleVisitors)
console.log('Number of allowed visitors: ', visitorsAllowed)


