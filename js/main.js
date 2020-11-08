
var name = document.getElementById("name")
var age = document.getElementById("age")
var maskChecker = document.getElementById("select")

var totalVisitors = 0
var deniedVisitors = 0
var allowedVisitors = 0

function start(){
if(name.value !== "string"){
        alert("Input your name")
    } else if(age < 0 || age > 100 ){
        alert("please input a valid age")
    } else if(age < 12) {
        alert("Sorry, you have to be 12 years or older to enter Eminence mall")
        deniedVisitors++
    } else if(maskChecker !== "yes"){
        alert("Sorry, you need to have your facemask on to enter")
        deniedVisitors++
    } 
    
    else {alert('welcome to Eminence Mall, ' + name)}
        allowedVisitors++

totalVisitors++


// counter
totalVisitors = document.getElementById("totalV").textContent = `Total visitors: ${totalVisitors++}`

deniedVisitors = document.getElementById("deniedV").textContent = `Denied visitors: ${deniedVisitors++}`

allowedVisitors = document.getElementById("allowedV").textContent = `Allowed visitors: ${allowedVisitors++}`

name.value = ''      
age.value = ''
maskChecker.value = 'No'

}


var button = document.getElementById("btn").onclick(start())


