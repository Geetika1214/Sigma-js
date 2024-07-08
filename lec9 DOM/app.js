//DOM document object model  (logical tree)

//selecing element
document.getElementById("description");
//classname
let smallImage = document.getElementsByClassName("oldImg");
 for(let i = 0 ; i<smallImage.length ; i++){
    console.log(smallImage[i].src);
 }

//tagname
console.dir(document.getElementsByTagName("p"));

//queryselectors(gives single obbject)
console.dir(document.querySelector('p'));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector("div a"));

//queryselectorall
console.dir(document.querySelectorAll('p'));

//properties and methods
let para= document.querySelector('p');
console.dir(para);
console.dir(para.innerText); // shows visible text contained in a node
console.dir(para.innerHTML);  // show the full markup
console.dir(para.textContent); //shows all the full text

//Attribute manipulation
//id, class, src

// let img = document.querySelector('img');
// img.getAttribute('id');
// img.setAttribute('id','spidermanimg');

//Manipulating style (inline)
let heading = document.querySelector('h1');
heading.style.color ="red";

let links = document.querySelectorAll(".box a ");
for(let i=0; i<links.length; i++){
   links[i].style.color = 'purple';
}

//classList
heading.classList.add("green");
heading.classList.remove("green");
heading.classList.contains("green");
heading.classList.toggle("green");

//Navigation
let h4 = document.querySelector('h4');
console.log(h4.parentElement);
console.log(h4.children);
let ul = document.querySelector('ul');
console.log(ul.parentElement);
console.dir(ul.children);
console.log(ul.children[2].previousElementSibling);

