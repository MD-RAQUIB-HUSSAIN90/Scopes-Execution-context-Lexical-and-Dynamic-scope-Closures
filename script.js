// TOPICS WHICH WE WILL COVER HERE
// i.   Scops
// ii.  Execution context
// iii. Lexical scope and dynamic scope
// iv.  Closure

//i. Scope - function scope, global scope, and block scope

// function testScope() {
//   // function scope srf function ke andar hi use kiya ja sakta hai
//   var x = 6;
//   console.log(x); // 6
// }

// testScope();

// global scop ko kisi bhi line likh ja sakta hai or kahi bhi likha ja sakta hai block ke andar ya bahar bhi likha ja sakta hai aur iska use kahi bhi kya ja sakta hai blocks ke andar ya bahar bhi

// block scope - block ke andar hi use kiya ja sakta hai or block ke bahar use nahi kiya ja sakta hai

// ii. Execution Context- js sabse pehle aapka function dekhta hai sabse pehle js banata hai execution context ye ek process hai jo 2 different phase me chalta hai 1. creation phase 2. execution phase.

// iii. Lexical scope  - aapp  kaha par pysically available ho ye poori tareeke se dipend karta hai ki aap kya access kar pauge.

// function abcd() {
//   let a = 10;
//   function xyz() {
//     console.log(a);
//   }
//   return xyz;
// }
// abcd()(); // 10

//Dynamic scope-   kaha se call kar rhe ho uspe depend kkarega ki  ky value milegi

//  let a= 12;
//  function abcd(){
//     console.log(a);
//  }

//  function xyz(){
//     let a=13;
//     abcd();
//  }
//  xyz(); // 12

// iv.  Closures-  hote hai  functions jo ki kisi parnet function ke andar ho aur  andar wala funtion return ho rha ho or returning funtion use kare parent function ka koi varaible

// function parent() {
//   let a = 14;
//   return function child() {
//     console.log(a);
//   };
// }

// parent()(); // 14

// fayda - closure ka use kar ke hum private variable bana sakte hai jo ki bahar se access nahi ho sakta hai
// nuksan - closure ka use kar ke hum memory leak kar sakte hai agar hum closure ka use kar ke variable ko access karte hai or usko delete nahi karte hai to memory leak ho sakta hai
//  global pollution
// how variable is stored in memory and how it is accessed in memoru ?
//  ans -  variable is stored in memory in the form of key value pair and it is accessed in memory by using the key.
