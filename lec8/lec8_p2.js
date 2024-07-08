// find max in array using reduce fun

let array = [ 23, 54, 62.3, 5,34.3];
let result = array.reduce((max,el) => {
    if(el>max){
        return el;
    }
    else{
        return max;
    }
});

//pq1
let arr = [10,40,30,60,20];

let ans = arr.every((el) => 
    el % 10 == 0 );
console.log(ans);

//q2
// let min = arr.reduce((min, el ) => {
//     if(el < min){
//         return el;
//     }
//     else{
//         return min;
//     }
// } );
// console.log(min);

//default parameters
function sum(a, b=2){
    return a+b;
}
console.log(sum(2,3));
console.log(sum(2));


//spread (expand to multiple values)
console.log("printing min num normally")
console.log(Math.min(1,2 ,3));
console.log("using spread")
console.log(Math.min(...arr));
console.log(...arr);
console.log(..."geetika");

//copy of arr
let newarr = [...arr];

let chars = [..."hell0"];

let odd = [1,3,5,7,9];
let even = [2,4,6];
let num = [...even, ...odd];
console.log(...num);

//using spread with array literals
const data = {
    email:"i@gmail.com",
    password:"hi"
};

let dataCopy= {...data , id:123};
console.log(dataCopy);

//Rest (bundle)
//arguements is a collection
function sum (...args){
    return args.reduce((sum,el) => sum+el);   
}
console.log(sum(2,43,32));


function min(msg,...args){
    console.log(msg);
    return args.reduce((min1,el) => {
        if(min > el){
            return el;
        }
        else{
            return min;
        }
    });
}

//Destructuring
let names = ["tony", "bruce", "steve" , "peter"];
let[winner , runnnerup , ...others] = names;
console.log(winner, runnnerup , ...others);

//destructuring for objects

const student = {
    name:"ram",
    age : 22,
    class: 9,
    pass:"abs",
    city : "mumbai"
};
let{name , pass , city ="pune"} = student ;