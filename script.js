// TOPICS WHICH WE WILL COVER HERE
// i.   Scops
// ii.  Execution context
// iii. Lexical scope and dynamic scope
// iv.  Closure
// v.   Use cases: private counters, encapsulation

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

// ye sach hai ki fnc ke khatm hone pe  aapka fnc and uske variables khtm ho jaate hai par  jab bhi closure banta hai to aapka fnc aur uske variables ka ek backlink banaya jata hai aur uske naam hote hai [[environment]]

// example of closure

// function countForMe() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// countForMe()(); // 1

// let fnc = countForMe(); //
// fnc(); // 1
// fnc();

//

// Encapsulation - \

// function clickLimiter() {
//   //   this variable is in encapsulation
//   let click = 0;
//   return function () {
//     if (click < 5) {
//       click++;
//       console.log(`You have clicked ${click} times`);
//     } else {
//       console.error("You have exceeded the limit of 5 clicks");
//     }
//   };
// }

// let clickHandler = clickLimiter();
// clickHandler();
// clickHandler();
// clickHandler();
// clickHandler();
// clickHandler();
// clickHandler();

function createToaster(config) {
  return function (str) {
    let div = document.createElement("div");
    div.textContent = str;
    div.className = `inline-block ${config.theme === "dark" ? " bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none `;

    document.querySelector(".parent").appendChild(div);

    if (config.positionX !== "left" || positionY !== "top") {
      document.querySelector(".parent").className +=
        `${config.positionX === "right" ? "right-5" : "left-5"}  ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`;
    }

    setTimeout(() => {
      document.querySelector(".parent").removeChild(div);
    }, config.duration * 1000);
  };
}

let toaster = createToaster({
  positionX: "right",
  positionY: "bottom",
  theme: "light",
  duration: 3,
});

toaster("Download Done");
setTimeout(() => {
  toaster("Arsh accepted your request");
}, 2000);
