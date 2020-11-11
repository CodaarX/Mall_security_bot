
let name = document.getElementById("name")
var age = document.getElementById("age")
var select = document.getElementById("select")

var totalVisitors = 0;
var deniedVisitors = 0;
var allowedVisitors = 0;

var button = document.getElementById("btn").addEventListener("click", function (event){
    event.preventDefault();


    totalVisitors += 1;
    if(typeof name.value !== "string"){
        alert("please enter a name. numbers or symbols are not allowed")   
    } else if(age.value < 12){ 
        alert(`${name.value} , you have to be older than 12 years old to enter`)
            deniedVisitors += 1;
    } else if (select.value !== "yes"){
        alert("Sorry, you need to have your facemask on to enter")
            deniedVisitors += 1;
    } else{
        alert('welcome to Eminence Mall, ' + name.value)
        allowedVisitors += 1;
    }

document.getElementById("totalV").textContent = `Total visitors: ${totalVisitors}`

document.getElementById("deniedV").textContent = `Denied visitors: ${deniedVisitors}`

document.getElementById("allowedV").textContent = `Allowed visitors: ${allowedVisitors}`

})