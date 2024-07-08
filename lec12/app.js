async function greet(){
    return "hello world"; //returns a promise
}

greet()
.then ((result)=> {
    console.log("promise was fulfilled");
    console.log(result);
}
)
.catch((error) => {
    console.log("promise rejected" , err);
});

let hello = async () => { return 5};//returns a promise

//Await - it pauses the execution of async funct 

function getNum(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) +1;
            console.log(num);
            resolve();
        } , 1000);
    });
}
 async function demo(){
    await getNum();
    await getNum();
    getNum();
 }

 //color change on h1
 //handling errors
  let h1 = document.querySelector("h1");

  function changecolor(color , delay){
     return new Promise((resolve , reject)=> {
        setTimeout(() => {
            let num = Math.floor(Math.random()*5);
            if(num>3){
                reject("promise rejected");
            }
            h1.style.color =color;
            console.log("color changed to ", color);
            resolve("color changed");
        }, delay);
     });
  }

  async function demo()
  {
    try{
        await changecolor("red" , 1000);
        await changecolor("yellow" , 1000);
       await changecolor("green" , 1000);
    }
   catch(err){
    console.log(err);
   }
    let a = 5;
    console.log(a);
  }