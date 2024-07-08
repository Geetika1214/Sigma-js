let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click" , function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);

    ul.appendChild(item);
    console.log(inp.value);
    inp.value = "";
});

ul.addEventListener("click", function(event){
    // console.log(event.target.nodeName);
    // console.log("deleted");
    if(event.target.nodeName == "BUTTON" ){
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("deleted");
    }
    
});


// let delbtns = document.querySelectorAll(".delete");
// for(dlbtn of delbtns){
//     dlbtn.addEventListener("click" , function(){
//         let parent = this.parentElement;
//         console.log(parent);
//         parent.remove();
//         console.log("element del eted");
//     });
// }

//for new buttons on page creteelemts , so event listener doesn't work
//Event delegation  ...use bubbling

