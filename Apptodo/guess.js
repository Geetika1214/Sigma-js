let max =prompt("Enter the max number");
const random = Math.floor(Math.random()* max)+1;
console.log(max);

let guess = prompt("Guess the number");

while(true){
    if(guess=="quit"){
        console.log("Game quit");
        break;
    }

    if(guess==random){
        console.log("Abey kya shaana hai tu , ikdam shii");
        console.log("number tha ye:" , random);
        break;
    }
    else if(guess < random ){
        guess = prompt("thoda bada soch");
    }
    else{
        guess = prompt("kya be.. aukaat ke baahr ka ni sochne ka ");
    }
    
}