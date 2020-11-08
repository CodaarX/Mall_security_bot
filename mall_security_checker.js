
var name = prompt("what is your name")
var age = prompt("what is your age")
var select = prompt("do you have a facemask")

var totalVisitors = 0;
var deniedVisitors = 0;
var allowedVisitors = 0;

function start(){
    totalVisitors += 1;
    if(typeof name !== "string"){
        alert("please enter a name. numbers or symbols are not allowed")   
    } else if(age < 12){ 
        alert(name + ", you have to be older than 12 years old to enter")
            deniedVisitors += 1;
    } else if (select !== "yes"){
        alert("Sorry, you need to have your facemask on to enter")
            deniedVisitors += 1;
    } else{
        alert('welcome to Eminence Mall, ' + name)
        allowedVisitors += 1;
    }

totalVisitors = alert(`Total visitors: ${totalVisitors++}`)

deniedVisitors = alert(`Denied visitors: ${deniedVisitors++}`)

allowedVisitors = alert(`Allowed visitors: ${allowedVisitors++}`)

}


start()