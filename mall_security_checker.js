// Javascript Objects Part 2

// Shopping mall security bot

// instantiate and define  variables


function startbot(){

    var hasMask
    var rejected_female_Visitors = 0;
    var rejected_male_Visitors = 0;
    var allowed_male_Visitors = 0;
    var allowed_female_Visitors = 0;
    var visitors_Denied = 0;
    var visitors_Allowed = 0;
    var customerName
    var customerGender
    var customerAge
    
        customerName = prompt('What is your name?');
        customerGender = prompt('What is your gender?');
        customerAge = prompt('what is your age?');
        hasMask = prompt('Do you have a facemask on?');
    
    // check if customers wear masks and if customers are 12 years and older
    
    if (hasMask === 'yes' && customerAge >= 12){
        console.log('welcome to Mike El Plaza ' + customerName);
        // count visitors allowed and count if visitors are males or females
        var visitors_Allowed = 0;
        visitors_Allowed += 1;
        if(customerGender === "male"){
            var allowed_male_Visitors = 0;
            allowed_male_Visitors += 1;
        } else {
            var allowed_female_Visitors = 0;
            allowed_female_Visitors += 1}
    }
    
    // check if customers wear masks and if customers are younger than 12 years
    
    else if (hasMask === 'yes' && customerAge <= 12){
        console.log(customerName + ' you must be 12 years or older to enter Mike El Plaza')
        // count rejected visitors and count if visitors are males or females
            var visitors_Denied = 0;
            visitors_Denied += 1;
            if(customerGender === "male"){
                var rejected_male_Visitors = 0;
                rejected_male_Visitors += 1;
            } else {
                var rejected_female_Visitors = 0;     
                rejected_female_Visitors += 1}
    }
    // check if customers wear masks
    else if (hasMask === 'no' ){
        console.log(customerName + ' you have been denied entry into enter Mike El Plaza for users without a facemask');
        // count recectors visitors allowed and count if visitors are males or females
        var visitors_Denied = 0;
        visitors_Denied += 1;
        if(customerGender === "male"){
            var rejected_male_Visitors = 0;
            rejected_male_Visitors += 1;
        } else {
            var rejected_female_Visitors = 0}
            rejected_female_Visitors += 1}
    
    
    
    // log to the console all results
    console.log('Number of rejected female visitors: ', rejected_female_Visitors)
    console.log('Number of rejected male visitors: ', rejected_male_Visitors)
    console.log('Number of allowed female visitors: ', allowed_female_Visitors)
    console.log('Number of allowed male visitors: ', allowed_male_Visitors)
    console.log('Number of allowed visitors: ', visitors_Allowed)
    console.log('Number of rejected visitors: ', visitors_Denied)
    
    }
    
    startbot();