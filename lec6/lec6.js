//Functions

function hello(){             //declare
    console.log("hello");
}


for(let i = 0 ; i< 10 ; i++){
    hello();
}


//pq1
function poem(){
    console.log("Twinkle Twinkle little star,...");
}

poem();


//pq2 create a function to roll a dice

function dice(){
    let random = Math.floor(Math.random() * 6) +1;
    console.log("Your dice gave :", random);
}

dice();

//q3

function printName(name, age ){
    console.log(name  , age );
}

printName("GEETIKA",19 );
printName("Akash", 15);

//pq3

function avg(a, b, c){
    let avg = (a+b+c)/3;
    console.log("average of number is :",avg);
}

avg(5,5,5);


//print a table 
function printtable(n){
    for ( let i = 1; i <= 10 ; i++ ){
        table= i* n ;
        console.log(n ,"*", i ,"=" , table);
    }
}

printtable(7);


//return keyword

function sum(a,b){
    console.log( "sum is:",a+b);
    return a+b;
}

sum(23,4);


