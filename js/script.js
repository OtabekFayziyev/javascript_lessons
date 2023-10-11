"use strict";

// let $ = 12;
// let _ = 22;
// console.log(_);
// console.log($);

// // console.log("Hello world");

// // const btn = document.querySelector("#btn");
// // const heading = document.querySelector("#hello")

// // btn.onclick = () => {
// //     const name = prompt("What is your name?");
// //     alert(`hello ${name}, nice to me you`);
// //     heading.textContent = `welcome ${name}`
// // };

// // const btn = document.querySelector("#btn");
// // const hello = document.querySelector("#hello");

// // btn.onclick = () => {
// //   const name = prompt("What is your name?");
// //   alert(`Hello ${name}, nice to see you!`);
// //   hello.textContent = `Welcome ${name}`;
// // };




// // let myName = "sarvar"
// // const num = 2+2


// // console.log(num);


// // let hisName = "otabek";

// // function herName() {
// //     console.log(hisName);
// // };

// // herName();

// // myName = "otaaaa"

// // console.log(myName);


// // let number = myName;

// // console.log(typeof(number));

// // const bird = { 
// //     qushlar: "laylak"
// // }
// // bird.qushlar = "qarga"

// // console.log(bird.qushlar = "chumchuq");


// // ----------------------------------------

// function ogohlantir() {
//     confirm("Hello world!")
// };

// // document.onclick = alert("hiiiiii");


// function myFoto() {
//     confirm("this is my foto")
// }


// function pNumber(phoneNumber) {
//     alert(phoneNumber)
// }

// function infoUser() {
//     const name = prompt("ismingiz?"),
//         surname = prompt("familiyangiz?")
//     all = "welcome " + name + " " + surname;
//     document.getElementById("savol").innerHTML = all;
// }


// //  --------------------------

// function javob() {
//     alert("men sevgan taom " + ovqat.value + " sabab " + sabab.value)
// };






// // ---------- O B J E C T ----------------

// // const user = new Object();

// // console.log(typeof{user});


// // let user = {          // an object
// //     name: "John",     // by key "name" store value "John"
// //     age: 30,
// //     "likes birds": true,           // by key "age" store value 30
// // };

// // let key = prompt("What do you want to know about the user?", "name");

// // // access by variable
// // alert(user.key); // John (if enter "name")

// // user["likes birds"] = false;

// // // alert(user["likes birds"]);

// // delete user["likes birds"];

// // user.isAdmin = true;

// // delete user.age;

// // // get property values of the object:
// // // alert(user.name); // John
// // // alert(user.age); // 30

// // console.log(user);

// // let user = {
// //   name: "John",
// //   age: 30
// // };

// // let key = "name";
// // alert( user.key )                   // undefined


// //  ----------------  [] tortburchak qavslar 


// // let fruit = prompt("Which fruit to buy?", "apple");

// // let bag = { 
// //     [fruit]: "siz olmani tanladingiz"
// // }

// // // alert(bag.apple);

// // console.log(bag.apple);


// // let meva = "apple";

// // let mevalar = {
// //     [meva + "Computers"]: 5
// // };

// // console.log(mevalar);




// // ------------------Property value shorthand

// function user(name, age) {
//     return {
//         userName: name,
//         userAge: age,
//     }
// };

// console.log(user("ota"));

// let ism = user("john", 30);

// console.log(ism.userName);

// let obj = {};
// obj.__proto__ = 5; // assign a number
// // alert(obj.__proto__);
// console.log(obj.__proto__);





// // ----------------|  "in" | "key" in object  |--------------

// let user3 = { name: "John", age: 30 };

// console.log("age" in user3);


// let hi = {
//     age: 32
// };

// let hay = "age";

// console.log(hay in hi);

// let obj2 = {
//     test: undefined
// };

// console.log(obj2.test);




// //   -------------- F O R    I N -----------//

// let uy = {
//     tomi: "shefir",
//     rangi: "qizil",
//     soni: 30,
//     isBiautiful: true
// };

// for (const shefir in uy) {
//     // const infoShefir = uy[shefir];
//     console.log(uy[shefir]);
// }



// // butun sonlarni ozini yozganimizda ular
// // 1 sonidan boshlab ketme ket kelishi mumkin 
// // masalan bu misolda: 1, 41, 44, 49. 
// // bu muammoni hal qilish uchun sonlardan oldin va ozgaruvchidan
// // oldin + belgisi qoyiladi
// let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     // ..,
//     "+1": "USA"
// };

// for (let code in codes) {
//     console.log(+code); // 1, 41, 44, 49
// }

// //   ----vazifa -------------

// const info = {
//     name: "John",
//     surname: "Smith"
// };

// info.name = "Pate";
// delete info.surname;
// console.log(info);

// // --------2

// function isEmpty(obj) {
//     for (const key in obj) {

//         return false;
//     }
//     return true;

// };

// let schedule = {};

// console.log(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// console.log(isEmpty(schedule)); // false


// // ----------   3  -----------------
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
// let sum = 0
// for (let key in salaries) {
//     sum += salaries[key]
// };
// console.log(sum);

// // ----------  4   -------



// let menu = {
//     num4: 200,
//     num5: 300,
//     text: hello
// };



// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == `number`) {
//             obj[key] *= 2
//         }
//         return obj
//     }
// };
// let result = multiplyNumeric(menu);

// console.log(result);




// // let menu = {
// //     num4: 200,
// //     num5: 300,
// //     text: "hello" // Corrected: Enclosed the string in quotes
// // };

// // function multiplyNumeric(obj) {
// //     for (let key in obj) {
// //         if (typeof obj[key] == 'number') {
// //             obj[key] *= 2;
// //         }
// //     }
// //     return obj; // Return the modified object
// // }

// // let result = multiplyNumeric(menu); // Call the function with the 'menu' object

// // console.log(result); // Output the modified 'menu' object

// const num = "12";

// const num2 = Number(num);

// console.log(typeof num2);

// let check;
// let accesage = prompt("how old are you?");
// let yosh = parseInt(accesage)

// if (yosh > 18) {
//     check = true
// } else {
//     check = false
// };

// console.log(check);


// const user = "samar";
// const job = "developer";

// console.log(` hello ${user}, his job is ${job}`);

// console.log(5 * 5 == "25");

// const isTrue = 12;
// const isFalse = false;
// const isChecked = false;

// console.log(!isTrue || isChecked || isFalse);

// isTrue > 18 ? console.log("no accept") : console.log("accept");


// function about(yosh) {
//     let natija;
//     if (yosh <= 18) {
//         natija = "open";
//     } else {
//         natija = "close";
//     }
//     return natija;
// };

// console.log(about(12)); 

// let a = 3;
// switch (a) {
//     case 4:
//         console.log("right");
//         break;
//         case 3:
//         case 5:
//             console.log("wrong");
//             console.log("not good");
//             break;
//     default:
//         console.log("mmmmmmmmm");
//         break;
// }

// console.log(a);

let person = {
    name: "John",
    surname: "Smith",
    age: 30,
    isMarried: false,
    adress: {
        street: "123 MAIN st",
        city: "karshi",
        zipCode: 1232456
    }
};

console.log(person.name);
console.log(person.surname);

person.age = 35;
console.log(person.age);

person.email = "fayziyevotabek3222@gmail.com";
console.log(person.email);

console.log(person.adress.street);

for (let key in person){
    console.log(key + ": " + person[key]);
}


