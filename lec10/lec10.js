//DOM are signals that something has occured 
//event 

// let btn = document.querySelector("button");
// console.dir(btn);
// //onclick basic and imp
// btn.onclick = function(){
//     console.log("btn was clicked");
// }

//event listeners (multiple functions are assigned to onclick etc)

let  btns = document.querySelectorAll("button");
for(btn of btns){
    // btn.onclick = sayhello;
    // btn.onmouseenter =  function(){
    //     console.log("you entered a button");
    // }
    // console.dir(btn);

    btn.addEventListener("click", sayhello);
    btn.addEventListener("dblclick", sayName);
}
function sayhello(){
    alert("hello");
}

function sayName(){
    alert("geetika");
}

