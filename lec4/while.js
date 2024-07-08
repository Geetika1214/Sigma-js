let i = 1;
while(i<10){
    console.log(i);
    i++;
}

// const favmovie = "Avatar";
// let guess = prompt("Tell me my fav movie or enter quit");
// while((guess!= favmovie ) && (guess != "quit")){
//     console.log("You guessed wrong movie");
//     guess = prompt("Guess again");
// }

// if(guess === favmovie){
//     console.log("Congrats! , you did it")
// }
// else{
//     console.log("you quit");
// }


//using loops with arrays

let fruits = ["mango" , "apple" , "banana" , "litchi" , "orange"];
for(let i = 0;i <fruits.length ; i++){
    console.log(i , fruits[i]);
}
//             Marvel  , Dc
let heroes = [["ironman" ,"Spiderman" , "Thor" ], ["Superman" , "Wonder Woman" , "Flash"]];
for(let i = 0; i<heroes.length ; i++){
    console.log(`List #${i}`);
    for(let j =0; j< heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}