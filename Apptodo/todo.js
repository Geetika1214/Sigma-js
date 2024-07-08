let todo = [];
let req = prompt("Please enter your request");

while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }

    if(req == "list"){
        console.log("-------------");
        for(let i=0; i< todo.length  ; i++){
            console.log(i , todo[i]);
        }
        console.log("-------------");
    }
    else if(req == "Add"){
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("task added");
        
    }
    
    else if(req == "Delete"){
         let idx = prompt("Please enter the index of task");
         todo.slice(idx , 1);
         console.log("Task Deleted");
    }
    else{
        console.log("Invalid request");
    }

    req = prompt("Please enter your request");
}
