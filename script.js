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

// let form = document.querySelector("form");
// let userName = document.querySelector("#name");
// let role = document.querySelector("#role");
// let bio = document.querySelector("#bio");
// let photo = document.querySelector("#photo");
// const userMananger = {
//   users: [],
//   init: function () {
//     form.addEventListener("submit", this.submitForm.bind(this));
//   },
//   submitForm: function (e) {
//     e.preventDefault();
//     this.addUser();
//   },
//   addUser: function () {
//     this.users.push({
//       userName: userName.value,
//       role: role.value,
//       bio: bio.value,
//       photo: photo.value,
//     });
//     form.reset();
//     this.renderUi();
//   },
//   renderUi: function () {
//     document.querySelector(".users").innerHTML=""
//     this.users.forEach(function (user) {
//       // Create Card
//       const card = document.createElement("div");
//       card.className = "cards";
//       card.id = "card-one";

//       // Create Image
//       const img = document.createElement("img");

//       img.src = user.photo;
//       img.alt = "user.photo";

//       // Create h3
//       const name = document.createElement("h3");

//       name.textContent = user.userName;

//       // Create h5
//       const profession = document.createElement("h5");

//       profession.textContent = user.role;

//       // Create small
//       const description = document.createElement("small");
//       description.textContent = user.bio;

//       // Append elements inside card
//       card.appendChild(img);
//       card.appendChild(name);
//       card.appendChild(profession);
//       card.appendChild(description);

//       // Append card to body

//       document.querySelector(".users").appendChild(card);
//     });
//   },
//   removeUser: function () {},
// };

// userMananger.init();

// Object Orianted

// function CreatePencil(name, price, color, company) {
//   this.name = name;
//   this.price = price;
//   this.color = color;
//   this.company = company;
//   this.write=function(text){
//     let h1=document.createElement("h1");
//     h1.textContent=text;
//     h1.style.color=color;
//     document.body.append(h1);
//   }
// }

// let pencil1 = new CreatePencil("apsara", 10, "grey", "apsara");
// let pencil2 = new CreatePencil("Natraj", 20, "red", "Natraj");
// let pencil3 = new CreatePencil("Doms", 20, "green", "Doms");

// function Bikes(brand,model,milage,color) {
//   this.brand=brand;
//   this.model=model;
//   this.milage=milage;
//   this.color=color;
// }

// let bike1=new Bikes("yamaha","xyz",75,"blake");
// let bike2=new Bikes("KTM","abc",20,"red");
// let bike3=new Bikes("Suzuki","Baleno",15,"blue");

// function CreatePencil(name, price, color, company) {
//   this.name = name;
//   this.price = price;
//   this.color = color;
//   this.companyt = company;
//   this.rang = function (text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color=color;
//     document.body.append(h1);
//   };

// }

// let pencil1 = new CreatePencil("netraj", 255, "red", "netraj");
// let pencil2 = new CreatePencil("Doms", 25, "green", "Doms");

// Use of Prototype structure=>[(className).prototype.(variableName)=(value) ]
// Eg-> 1....
// function CreatePencil(name, price, color, company) {
//   this.name = name;
//   this.price = price;
//   this.color = color;
//   this.write=function(text){
//     let h1=document.createElement("h1");
//     h1.textContent=text;
//     h1.style.color=color;
//     document.body.append(h1);
//   }
// }
// CreatePencil.prototype.company="Arsh khan company"

// let pencil1 = new CreatePencil("apsara", 10, "grey", "apsara");
// let pencil2 = new CreatePencil("Natraj", 20, "red", "Natraj");
// let pencil3 = new CreatePencil("Doms", 20, "green", "Doms");

// Eg-> 2....(yaha prototype me write naam ka method create ho rha hia jo ki ek permanent memorise kar rha hai )
// prototype me ham koi bhi method banaye to wo default method ke rup me kaam karta hai. har naye object me wo maujud rahega aur ham  jo normal mathod banate hai to manual hota hai jab object banao to method ko bhi usi ke andar create karo...

// function CreatePencil(name, price, color, company) {
//   this.name = name;
//   this.price = price;
//   this.color = color;
//   }
// CreatePencil.prototype.write=function(text){
//     let h1=document.createElement("h1");
//     h1.textContent=text;
//     h1.style.color=this.color;
//     document.body.append(h1);}

// let pencil1 = new CreatePencil("apsara", 10, "grey", "apsara");
// let pencil2 = new CreatePencil("Natraj", 20, "red", "Natraj");
// let pencil3 = new CreatePencil("Doms", 20, "green", "Doms");

//  Use of (class)...............

// class CreatePencil {
//   constructor(name, company, price, color) {
//     this.name = name;
//     this.company = company;
//     this.price = price;
//     this.color = color;
//   }

//   erase() {
//     document.body.querySelectorAll("h1").forEach((element) => {
//       if (element.style.color === this.color) {
//         element.remove();
//       }
//     });
//   }
//   write(text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color = this.color;
//     document.body.append(h1);
//   }
// }

// let p1 = new CreatePencil("apsara", "apsara", 455, "red");
// let p2 = new CreatePencil("natraj", "natraj", 765, "blue");

//
//
//
// Now we will leanr about (inheritence)...................

// class User {
//   constructor(name, address, username, email) {
//     this.name = name;
//     this.address = address;
//     this.username = username;
//     this.email = email;
//     this.roll = "user";
//   }

//   checkRole(){
//     console.log(`You are a ${this.role}`);

//   }
//   write(text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = `${this.name} : ${text}`;
//     document.body.append(h1);
//   }
// }
// // here is the demo of inheritence....................

// class Admin extends User {
//   constructor(name, address, username, email) {
//     super(name, address, username, email);
//     this.role = "Admin";
//   }
//   remove() {
//     document.querySelectorAll("h1").forEach((element) => {
//       element.remove();
//     });
//   }
// }

// let user1 = new User(
//   "Arsh khan",
//   "Sk Market Alba Colony Phulwari Sharif Patna",
//   "Khaan__Saab",
//   "karsh@gmail.com",
//   "software developer",
// );
// let user2 = new User(
//   "Samar",
//   "Milkiyana Mohalla Phulwari Sharif Patna",
//   "Mrs.Khaan__Saab",
//   "karsh@gmail.com",
//   "Arshkhan's wife",
// );

// let a1 = new Admin(
//   "raquib",
//   "mahatwana mohalla phulwari sharif patna",
//   "mdraquib",
//   "mdraquib1234@gmail.com",
// );

// class User {
//   constructor(name, age, role, email) {
//     this.name = name;
//     this.age = age;
//     this.role = role;
//     this.email = email;
//   }
// }
// User.prototype.company = "yamaha";

// class HR extends User {
//   constructor(name, age, role, email) {
//     super(name, age, role, email);
//     this.role = "HR";
//   }
// }

// let U = new User("arshkhan", 23, "software", "karsh@gmail.com");

// let U2 = new User("samar naushad", 20, "house wife", "samar@gmail.com");

// let hr = new HR("Naushad imam", 60, " human resource", "naushadimam@gmail.com");

// let coffe = {
//   color: "dark",
//   drink: function () {
//     console.log("gut gut gut");
//   },
// };

// let arabiataCoffe = Object.create(coffe);
// arabiataCoffe.taste="bitter";
// arabiataCoffe.drink();

// Now we are going to learn about (syncronus and Asyncronus).................................

// console.log("hey1");
// console.log("hey2");
// setTimeout   (()=>{
// console.log("hey3");
// },3000)

// console.log("hey4");
// console.log("hey5");

// this is main function........................................
// function runAfterSomeTime(fnc) {
//   setTimeout(fnc, 2000);
// }

// and here is the function which has written as argument are called (callback function)
// runAfterSomeTime(function () {
//   console.log("hello");
// });
