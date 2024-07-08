let popsize="L";

if(popsize==="XL"){
    console.log("price is Rs. 250");
}
else if(popsize==="L"){
    console.log("price is Rs.200");
}
else if(popsize==="M"){
    console.log("price is Rs.100");
}
else if(popsize==="S"){
    console.log("price is Rs.50");
}


//practice question

let str = 'Apple';

if(str[0]==='A' && str.length >3){
    console.log("It is a good string");
}
else {
    console.log("It's not  a good string");
}


//pq2
let num = 12;
if((num%3===0)&& ((num+1 ===15)||(num-1 ===11) )){
    console.log("SAfe");
}
else{
    console.log("unsafe");
}


//switch statements

let color= '';

switch(color){
    case 'red':
    console.log("Stop");
    break;
    case 'yellow':
        console.log("Slow Down");
        break;
    case 'green':
        console.log('Go');
        break;
    default:
        console.log("Broken light");     
}


//pq3
let day = '2';

switch(day){
    case '1':
        console.log("Monday");
        break;
    case '2':
        console.log("Tuesday");
        break;
    case'3':
    console.log("Wednesday");
    break;
    case '4':
        console.log("Thursday");
        break;
    case '5':
        console.log("Friday");
        break;
    case'6':
    console.log("Saturday");
    break;
    case'7':
    console.log("Sunday");
    break;
    default:
        console.log("Invalid number");

}


// //prompts 
//  let name =prompt("enter your name:");
//  console.log("Hi dear");


 let number= 470;
if(number % 10 == 0){
    console.log("Good");
}
else{
    console.log("Bad");
}

