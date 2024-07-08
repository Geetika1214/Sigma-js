let url = "https://catfact.ninja/fact";

//using axios library to make http requests

async function getFacts(){
    try{
        let res = await axios.get(url);
         return res.data.fact;
    }
    catch(e){
        console.log(e);
        return "No fact found";
    }
}

let button=document.querySelector("button");

button.addEventListener("click" , async () => {
   let fact = await getFacts();
   console.log(fact);
   let p = document.querySelector("p");
   p.innerText = fact;
} );



//dogimages using axios
let dogapi = "https://dog.ceo/api/breeds/image/random";
let btndog = document.querySelector(".dogbtn");
btndog.addEventListener("click" , async () => {
    console.log("dog image");
    let link = await getImage();
    console.log(link);
    let img = document.querySelector("img");
    img.setAttribute("src",link);
});

async function getImage(){
    try{
        let img = await axios.get(dogapi);
        return img.data.message;
    }
    catch(e){
        console.log("error" , e);
        return "No image found";
    }
}


//sending headers using axios

const jokes = "https://icanhazdadjoke.com";

async function getJokes(){
    try{
        const config = {headers: {Accept: "application/json"}};
        let res = await axios.get(jokes , config);
        console.log(res.data);
    }
    catch(e){
        console.log(e);
    }
}

//updating query strings
let url1 = "http://universities.hipolabs.com/search?name="; 

// let country = "nepal";


let btnsrch = document.querySelector(".srch");
btnsrch.addEventListener("click" , async () => {
    console.log("button was clicked");
    let country = document.querySelector("input").value;
    console.log(country);
    let clg = await getcolleges(country);
    console.log(clg);
    show(clg);
});
async function getcolleges(country){
    try {
        let res = await axios.get(url1 + country)
          return res.data;
        }
        catch(e){
            console.log("error" , e);
            return "no list";
        }
    }

    function show(clg){
        
        let list = document.querySelector("#list");
        list.innerText="";
        for(cg of clg){
            console.log(cg.name);
            let li = document.createElement("li");
            li.innerText = cg.name;
            list.appendChild(li);
        }
    }