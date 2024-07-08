const student = {
    name: 'geet',
    age : 19,
    eng : 94,
    math :90,
    phy : 93,
    getAvg(){
        console.log(this);
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(avg);
    }

}

function getAvg(){
    console.log(this);  // window object default
}
getAvg();


//try n catch statement
try{
    console.log(A);
}catch(err){
    console.log("variable a doesn't ")
    console.log(err);
}
console.log("After trail statements");

//miscellineous 
//arrow functions
//var = (arg1, arg2) => { func definition}
const sum = (a,b) => {
    console.log(a+b);
};

const cube = (n) => {
    return n*n*n;
}

//implicit return statement in arrow function

const mul = (a,b) =>(
    a*b
);

//set timout 

console.log('hi there');
setTimeout(()=>{
    console.log("Apna college");
}, 4000);
console.log("welcome to")


//set interval 

 let id = setInterval(() => {
    console.log("Apna College");
}, 2000);
console.log(id);

clearInterval(id);

//this with arrow functions
//lexical parent scope

const student1 = {
     name:"akash",
     marks :82,
     prop : this, //global scope window 
     getName: function(){

        console.log(this);   // local scope - student1 object
        return this.name;
     },
     getMarks:()=> {
        console.log(this);  //lexical(parent's) scope - window
        return this.marks;
     },
     getInfo1:function(){
        setTimeout(() => {
            console.log(this);   // student
        },2000);
     },

     getInfo2: function(){
         setTimeout( function() {
            console.log(this);      //window
         })
     }
};