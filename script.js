// TOPICS WHICH WE WILL COVER HERE
// i.   Scops
// ii.  Execution context
// iii. Lexical scope and dynamic scope
// iv.  Closure
// v.   Use cases: private counters, encapsulation

// i. Scope - function scope, global scope, and block scope

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

// Dynamic scope-   kaha se call kar rhe ho uspe depend kkarega ki  ky value milegi

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

// function createToaster(config) {
//   return function (str) {
//     let div = document.createElement("div");
//     div.textContent = str;
//     div.className = `inline-block ${config.theme === "dark" ? " bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none `;

//     document.querySelector(".parent").appendChild(div);

//     if (config.positionX !== "left" || positionY !== "top") {
//       document.querySelector(".parent").className +=
//         `${config.positionX === "right" ? "right-5" : "left-5"}  ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`;
//     }

//     setTimeout(() => {
//       document.querySelector(".parent").removeChild(div);
//     }, config.duration * 1000);
//   };
// }

// let toaster = createToaster({
//   positionX: "right",
//   positionY: "bottom",
//   theme: "light",
//   duration: 3,
// });

// toaster("Download Done");
// setTimeout(() => {
//   toaster("Arsh accepted your request");
// }, 2000);

//  USE  OF "THIS" keyword
// ye ek special keyword hai jo ki function ke andar use hota hai or ye function ke context ko refer karta hai.
// aur alag alag scop  me alag alag use ho sakta hai

// Global scoope me this keyword window object ko refer karta hai
// console.log(this);  //--> Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// "this" keyword in Functions

// function abcd() {
//   console.log(this);
// }

// abcd();

// function  aur global scop me this keyword window object ko refer karta hai

// "this" keyword in Methods (objects)
// Object ke andar this keyword us object ko refer karta hai jiske andar ye function call ho raha hai
// mtlb ki usi object ke andar ke properties ko access karta hai

//  let obj={
//     name:"Arsh",
//     age:21,
//     sayName:function(){
//         console.log(this.age);
//     },
//  };
//  obj.sayName();

// "This" keyword in  Event Handling
// let h1=document.querySelector("h1");
// h1.addEventListener("click",function(){
//     console.log(this);

// })

// Arrow funtion ke sath  "this" window ko refers karta hai
// jab ki  function Expretins ke sath us element ko refer karta hai jis par event laga hai

// "this" keyword in Class
// classes ke andar jab aap this keyword ko use karte ho to jab jab use karoge to ek blank object create hota hai jiske this ki value store ho jati hai

// class Abcd {
//   constructor() {
//     console.log("heyy");
//     this.a = 12;
//   }
// }

// let val=new Abcd()
// console.log(val);

// let obj = {
//   name: "Arsh",
//   age: 21,
//   sayName: function () {
//     let defj = () => {
//       console.log(this);
//     };
//     return defj();
//   },
// };
// obj.sayName();
//
//
//
//
//
//  variable access location of "this" according to  scops and value of "this"
// global -> window
// function -> window
// mathod with Es5 eg(function(){}) ->object
// method with Es6 ->window (when we use arrow functuion) instead of fucntion expretions
// Es5 func inside Es5 method ->window
// Arrow func  inside Es5 mehtod -> object
// event handler -> element
// class -> blank object

// Note-> this keyword always take a value from thier parent function or mathods
//
//
//
//learn about "Manual binding" & [call,apply,bind]..................................
// i "Call"-----
// let obj = {
//   name: "arsh khan",
//   age:25
// };

// function abcd(a,b,c) {
//   console.log(this,a,b,c);
// }
// // i "Call"-----
// abcd.call(obj,1,2,3);
// // ii "Apply"-----
// abcd.apply(obj,[1,2,3]);
// // iii "Bind"-----
// let newFnc=abcd.bind(obj,1,2,3);
// newFnc();

// useCase of this ....

let form = document.querySelector("form");
let userName = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");
const userMananger = {
  users: [],
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },
  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
  },
  addUser: function () {
    this.users.push({
      userName: userName.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });
    form.reset();
    this.renderUi();
  },
  renderUi: function () {
    document.querySelector(".users").innerHTML=""
    this.users.forEach(function (user) {
      // Create Card
      const card = document.createElement("div");
      card.className = "cards";
      card.id = "card-one";

      // Create Image
      const img = document.createElement("img");

      img.src = user.photo;
      img.alt = "user.photo";

      // Create h3
      const name = document.createElement("h3");

      name.textContent = user.userName;

      // Create h5
      const profession = document.createElement("h5");

      profession.textContent = user.role;

      // Create small
      const description = document.createElement("small");
      description.textContent = user.bio;

      // Append elements inside card
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(profession);
      card.appendChild(description);

      // Append card to body
     

      document.querySelector(".users").appendChild(card);
    });
  },
  removeUser: function () {},
};

userMananger.init();
