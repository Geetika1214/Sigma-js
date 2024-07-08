let students = ['aman' , 'geet' , 'akash'];
console.log(students);
console.log(students[0]);
console.log(students.length);

let cars = ["Audi" , "BMW" , "Maruti" , "Porche"];
console.log(cars);
cars.includes("Audi");
cars.reverse();
cars.slice();
cars.concat(students);

cars.push("Ferrari");

console.log(cars);
console.log(cars.pop());
console.log(cars);


let followers =["A","B" , "c", "D"];
let blocked = followers.shift();
console.log(followers);
console.log(blocked);

//splice method
// it removes / replaces / add elements in place 
// Splice (start, deleteCount , item0...item n)

let colors = ["red", "yellow" , "blue" , "orange" , "black" , "white"];
console.log(colors);
colors.splice(4);
console.log(colors);
