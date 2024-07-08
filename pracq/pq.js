let a = 37;
let b= 278;
let c = 267;

if(a>b)
{
    if(a>c){
        console.log("A is greater");
    }
    else{
        console.log("A is greater than B but smaller than C");
    }
}

 if(b>c){
        if(b>a){
            console.log("B is greater ");
        }
        else{
            console.log("B is greater than C but smaller than A");
        }
}

if(c>a) {
    if(c>b){
        console.log("C is greater");
    }
    else{
        console.log("C is greater than A but smaller than B");
    }
}