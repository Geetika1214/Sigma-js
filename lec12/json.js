let student = {
    name : "shrada",
    age: 23
};

let jsondata= '{"name":"shrada","age":23}';
console.log(jsondata);
console.log(jsondata.name);
let data = JSON.parse(jsondata);
console.log(data);
console.log(data.name);