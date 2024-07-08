let arr = [1,2,34,5];
 let print = function print(element){
    console.log(element);
}

arr.forEach(print);

//or

arr.forEach(function(element){
    console.log(element);
});

//arrow fun
console.log("for each using arrow function");
arr.forEach((el)=>{
    console.log(el );
});


//for each with array objects
let arr1= [
    {
    name:"aman",
    marks:93
    },
    {
    name: "geet",
    marks:87
    },
    {
        name:"akash",
        marks:97
    }
];

arr1.forEach((student) => {
    console.log(student.marks);
});


let gpa= arr1.map((el) => {
    return el.marks/10;
});

//map function
let arr2 = [1,2,3,4];
let double = arr2.map((el) => {
    return el*el;
});


//filter 
console.log("using filter func");
let nums =[1,2,34,5,6,3,7];
let even = nums.filter((num) => {
    return num % 2 == 0;
    //even-true , odd-false;
});

//every logical and
//arr.every(some fun def(callback) or name);

console.log("every");
 let num = nums.every((el) => {
    el %2 == 0;
}) ;

//some (logical or)
console.log("using some function");
let num_some = nums.some((el) => {
      el %2 ==0;
});

//Reduce  (addition of all)
console.log("red");
//arr.reduce( reducer function with 2 variable for(accumulator , element ) );
let reduce = nums.reduce((result ,el) => {
    console.log(result);
    return result+el;
});
console.log(reduce);
