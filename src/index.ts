// // let x:number|string = 1;

// // x="jammu";

// // console.log(x);

// let x:any ;
// x=1;
// x=true;
// x="jammu";


// function greet(name:string):string{
//     let message:string="Hello "+name;
//     console.log(message);
//     return message;
// }

// greet("Jammu");
// // greet(1); // This will cause a TypeScript error because the argument is not of type string


// function sum(a:number , b:number):number{
//     return a+b;
// }
// let ans =sum(9,6);
// console.log(ans);


// function isLegal(age:number):boolean{
//     if(age>=18){
//         return true;
//     }else{
//         return false;
//     }
// }

// let legal = isLegal(20);
// console.log(legal);



// function delayedCall(fn:()=>void){
//     setTimeout(fn, 1000);
// }

// delayedCall(function(){
//     console.log("Hello after 1 second");
// })


function delayedCall(anotherfn:()=>void){
    setTimeout(anotherfn, 1000);
}

function log(){
    console.log("Hello after 1 second");
}

delayedCall(log);