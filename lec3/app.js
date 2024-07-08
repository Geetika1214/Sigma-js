let msg = "   he llo   ";
console.log(msg);

let newmsg = msg.trim();
console.log(newmsg);



let name = " Garg House ";

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.indexOf("g"));
console.log(name.indexOf("z"));
console.log(name.trim().toUpperCase());
//Slice
console.log(name.slice(1,5));
console.log(name.slice(-4)); 
console.log(name.slice(4));
//Replace
console.log(name.replace("Garg", "our new").trim());
//Repeat 
console.log(name.repeat(2));