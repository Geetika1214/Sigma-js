let btn = document.querySelector("button");

btn.addEventListener("click" , function(){
    let h3 = document.querySelector("h3");
    let randomcolor = getrandomcolor();
    h3.innerText = randomcolor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomcolor;
    console.log("color updated");
});

function getrandomcolor(){
    let red =Math.floor( Math.random() * 255);
    let blue = Math.floor( Math.random() * 255);
    let green = Math.floor( Math.random() * 255);
    let color = `rgb(${red} , ${green},${blue})`;
    return color;
}

//this in  event listener/handler

btn.addEventListener("click" , function(){
    console.log(this); // this is btn
});

//keyboard events
btn.addEventListener("click", function(event){
    console.log("button clicked");
    console.log(event);
});

let input = document.querySelector("input");
input.addEventListener("keydown" ,function(event){
    console.log("key was pressed");
    console.log(event);
    console.log(event.key);
    console.log(event.code);
} )

//Form Events
let form = document.querySelector("form");
form.addEventListener("submit" , function(){
    // alert("form submitted");
    event.preventDefault();
});

//extracting form data
// form.addEventListener("submit" , function(){
//    let input = document.querySelector("input");
//    console.dir(form);
//    let user = this.elements[0];
//    console.log(user.value);
//    console.dir(input);
//    console.log(input.value); 
// });

//change event
let user = document.querySelector("input");
user.addEventListener("change" , function(){
    console.log("input changed");
    console.log("final val=" , this.value);
    });

//input event
user.addEventListener("input", function(){
    console.log("input event");
    console.log("final val" , this.value);
} );