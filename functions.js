// 1. Create one function with zero parameter having a console statement;

function zero(){
   console.log("hello");
}
zero();

// 2.Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function sum(x,y){
    let  res = x + y;
    console.log(res);
}
sum(3,4);

// 3. Create one arrow function

const arrow = (m,n)=> {
    console.log(`this is arrow function with value ${m}, ${n}`);
}
arrow(2,5);

//4. "Print output: "
// var x = 21;
// var girl = function () {
//     console.log(x);           //undefined
//     var x = 20;
// }
// girl ();

output: [undefined]

// 5."Print output: 
// var x = 21;
// girl ();
// console.log(x)         //21
// function girl() {
//     console.log(x);      //undefined
//     var x = 20;
// };

output: [undefined, 21]

// 6."Print output
// var x = 21;
// a();
// b();
// console.log(a);
// a = function() {  
//    x = 20;
//   console.log(x);    
// };
// b = function() {
//     x = 40;
//    console.log(x);     
// };

output: [ReferenceError]

// 7. Write a function that accepts parameter n and returns factorial of n. 

function factorial(n) {
    let fact = 1;
   for(let i=1; i <= n; i++){
      fact = fact * i; 
   }
console.log(fact);
}
factorial(5);