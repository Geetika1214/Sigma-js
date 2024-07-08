// let arr = [1,2,3,4,5,5,3,2];
// let num = 2;
// console.log(arr);
// for(let i =0 ; i<arr.length; i++){
    
//     if(arr[i] === num){
//         arr.splice(i,1);
//     }
// }


// //q2 & q3
// let number = 287152;
// let count = 0;
// console.log(number);
// let copy = number;
// let sum = 0;

// while(copy > 0){
//     count++;
//     digit = copy%10 ;
//     sum+=digit;
//     copy = Math.floor(copy/10);
// }

// console.log(count);
// console.log(sum);


// //q4(Factorial of a number)

// let n = prompt("Enter the number to find factorial");
// console.log(n);
// let fact = 1;
// for(i = 1 ; i<=n ; i++){
//     fact *= i;
// }

// console.log(fact);


//q5
 
let array = [232, 455, 12, 4,32,543] ;
let largest = 0;
for(let i = 0; i<array.length ; i++){
   if(largest < array[i]);
   largest = array[i];
 }
console.log(largest);