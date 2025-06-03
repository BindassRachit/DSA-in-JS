// area of triangle by heron's formula

let a = 5;
let b = 4;
let c = 4;
 
let s = (a+b+c)/2 
console.log(s); 
 

console.log(Math.sqrt(s * (s-a) * (s-b) *(s-c))); 