//for loop

for(let i = 1; i<=5 ;  i++){
    console.log(i);
}

console.log("printing  odd numbers")
for(let i = 1 ; i<=15; i++){
    if(i%2!=0){
      console.log(i);
    }
}

console.log("Even Numbers");
    for(let i=2 ; i<=10; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

console.log("Print table of 5");
for(let i = 1 ; i<=10; i++){
    ans = 5*i;
    console.log(ans);
}


// let n = prompt("Enter the number");
// n =parseInt(n);
// console.log("Print the table of" , n);
// for(let i = 1; i<=10; i++){
//     let ans1 = n * i;
//     console.log(ans1); 
// }

//Nested loops
for(let i = 1; i<=3; i++){
    console.log("outer loop", i);
    for(let j = 1; j<=3; j++){
        console.log(j);
    }
}