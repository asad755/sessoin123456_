/*
let teacher = { //Defining an Object and assigning its reference to the variable teacher 
    name: "Zeeshan",    //Declaring a property with the name of name
    experience: "10",    //Declaring a property with the name of experience

    teach() {
        console.log("The Responsiblity of a Good Teacher is to Deliver the knowledge not teaching!");
    },

    check(marks:number, name:string){
        console.log(`Your Name ${name} & Marks are : ${marks}`);
        
    }
}
//To Access/Reterive the values of an object
let objName = teacher.name;             //Storing Object property in a variable
let objExpr = teacher.experience;       //Storing  Object property in a variable
console.log(`Name:${objName}, Experience: ${objExpr}`);  //Printing the value of object property through variable
console.log(teacher);
console.log(objName);
console.log(objExpr);

*/

objName = "Sadiq"
objExpr = "39";
//console.log(`Name:${teacher.name}, Experience: ${teacher.experience}`);              
//Inline or Annonimous Objects
printObject({
    key: "01",
    value: "Alpha"
});

let annObj;

function printObject(obj: Object){
    console.log(obj);
    // let hasKeyProp = obj.hasOwnProperty("key");
    // let keys = Object.keys;
    // for(let x=0;x<keys.length;x++){
    //     console.log(keys[x].Name);        
    // }
    annObj = obj;
}
console.log(annObj);
console.log(Object.values(annObj));

let values = Object.values(annObj); 
for(let value of values){
    console.log(value);    
}
// printObject({
//     objName,
//     objExpr
// });

//Objects Methods/Function Invoking
// teacher.teach();
// teacher.check(10,"Sadiq");
