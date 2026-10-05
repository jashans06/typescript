function printPerson(person: {
     name: string; age: number 
    }): void {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

let user ={
    name:"Jammu",
    age:20
}

printPerson({ name: "Jas", age: 22 });
printPerson(user); 


interface userType{
    firstName:string,
    lastName:string,
    age:number
}

function greetUSer(user:userType){
console.log(`Hello ${user1.firstName} ${user1.lastName}, Age: ${user1.age}`);   
}

let user1:userType ={
    firstName:"Jammu",
    lastName:"Uni",
    age:20
}

greetUSer(user1);