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

// let person = {
//     name: "John",
//     surname: "Smith",
//     age: 30,
//     isMarried: false,
//     adress: {
//         street: "123 MAIN st",
//         city: "karshi",
//         zipCode: 1232456
//     }
// };

// console.log(person.name);
// console.log(person.surname);

// person.age = 35;
// console.log(person.age);

// person.email = "fayziyevotabek3222@gmail.com";
// console.log(person.email);

// console.log(person.adress.street);

// for (let key in person){
//     console.log(key + ": " + person[key]);
// }




// let numberOfSeries = prompt("Nechta serial ko`rdingiz?", "soni");

// let seriesDB = {
//     count: numberOfSeries,
//     series: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// const a = prompt("Oxirgi ko`rgan serialingiz?"),
// b = prompt("Nechi baxo berasiz?"),
// c = prompt("Oxirgi ko`rgan serialingiz?"),
// d = prompt("Nechi baxo berasiz?");

// seriesDB.series.a = b;
// seriesDB.series.c = d;

// console.log(seriesDB);


// ================ FUNCTION =============

// ---------------------------------function decloration
// function person(firstname, lastname) {
//     return `hi ${firstname} ${lastname} siz talaba boldingiz!!!!`
// };

// console.log(person("ota", "fayziyev"));


// //---------------------------------function expression
// let a = function (s, d) {
//     return s * d
// };

// console.log(a(2, 4));



// // ----------------------------------arrow function
// let hi = (Name) => `hi ${Name}`

// console.log(hi("sava"));

// // =======================

// function x(a, b = 0) {
//     return (2*(a + b))
// };

// console.log(x(2));


// ==================== METHOD and PROPERTY ===

// let user =  [1,2, 3, 4, 5, 6, 7, 8, 9];

// console.log(user[2]);

// let ism = "otabek";

// console.log(ism[3] = "p" , ism);
// console.log(ism);

// const greeting = "hello world";
// // console.log(greeting.indexOf("w"));    //  6

// console.log(greeting.slice(6));    // hello
// console.log(greeting.substring(0));  // hello world
// console.log(greeting.substr(6, 3));  // world // from world 3 letter




//                                        NUMBER METHODS

// const num = 18.4;                           // 18
// console.log(Math.round(num));


// const data = "13.8px";
// console.log(parseInt(data));                   // 13
// console.log(parseFloat(data));                 //13.8


// const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", '')

// const seriesDB = {
//   count: numberOfSeries,
//   series: {},
//   actors: {},
//   genres: [],
//   private: false,
// }

// for (let i = 0; i < 2; i++) {
//   const a = prompt("Oxirgi ko'rgan serialingiz?"),
//     b = prompt('Nechi baxo berasiz?')

//   if (a != null && b != null && a != '' && b != '') {
//     seriesDB.series[a] = b
//     console.log('done')
//   } else {
//     console.log('error')
//     i--
//   }
// }

// if (seriesDB.count < 5) {
//   console.log('Kam serial ko’ripsiz')
// } else if (seriesDB.count >= 5 && seriesDB.count <. 10) {
//   console.log('Siz classik tamoshabin ekansiz')
// } else if (seriesDB.count >= 10) {
//   console.log('Siz serialchi zvezda ekansiz')
// } else {
//   console.log('Error')
// }

// console.log(seriesDB)

// ///=================================================================




// let numberOfSeries;
// function quiz() {
//     numberOfSeries = +prompt("Nechta serial ko'rdingiz?", '')

//     while (numberOfSeries == '' || numberOfSeries == null || isNaN(numberOfSeries)) {
//         alert("Iltimos tog`ri javob bering!")
//         numberOfSeries = +prompt("Nechta serial ko'rdingiz?", '')
//     }
// }
// quiz()

// const seriesDB = {
//     count: numberOfSeries,
//     series: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// function rememberSeries(params) {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Oxirgi ko'rgan serialingiz?"),
//             b = prompt("Nechi baxo berasiz?")

//         if (a != null && b != null && a != '' && b != '') {
//             seriesDB.series[a] = b
//             console.log("done");
//         } else {
//             alert("Iltimos javob bering!!!")
//             console.log("error")
//             i--
//         }
//     }
// };
// rememberSeries();

// function countCheck(count) {
//     if (count < 5) {
//         let message = "Kam serial ko`ripsiz";
//         alert(message);
//         return message;
//     } else if (count >= 5 && seriesDB.count < 10) {
//         let message = "Siz classik tamoshabin ekansiz";
//         alert(message);
//         return message;
//     } else if (count > 10) {
//         let message = 'Siz serialchi zvezda ekansiz';
//         alert(message);
//         return message;
//     } else {
//         alert("Nechta serial korganingizni aytmadingiz!");
//         return null;  // Return null when there is no valid message
//     }
// }

// // if (seriesDB.private === true) {
// //     countCheck = undefined;  // Set countCheck to null when seriesDB.private is true
// // }

// console.log(countCheck(seriesDB.count));


// let genresINfo;
// function writeGenres(genre) {
//     for (let a = 0; a <= 2; a++) {
//         genresINfo = prompt(`Yaxshi ko'rgan janringiz ${a + 1}`);

//         genre[a] = genresINfo;
//     }


// }
// writeGenres(seriesDB.genres);

// function showDB(params) {
//     if (seriesDB.private != true) {
//         console.log(params);
//     } else {
//         alert("aaaaaaaaaaaaaaaaa what is wrong!!!!!!!!!!!")
//         console.log("ERROR");
//     }
// }
// showDB(seriesDB);


///////////////////////////////////////////////////////////////////////////////////

// ========================= C A L L B A C K  =====================================

///////////////////////////////////////////////////////////////////////////////////

// function num1(cb) {
//     setTimeout(() => {
//         console.log(1);
//         cb()
//     }, 1000);
// };

// function num2() {
//     console.log(2);
// };

// num1(num2);                         //   callback function
// // num1(function num2() {           anonym function
// //     console.log(2);
// // });

// function edu(subject, callback) {
//     console.log(`--I wanna learn ${subject}`);
//     callback(subject)
// };

// edu("JAVASCRIPT", function (subject) {
//     console.log(`--${subject} thats great!!!`);
// });

//                     object method

// const theif = {
//     jacket: true,
//     hair: "jingalak",
//     colors: {
//         jacket: "black",
//         hair: "grey"
//     }
// };

// const { jacket, hair } = theif.colors;                              // destruptizatsiya
// console.log(jacket);
// console.log(hair);

// for (let key in theif) {
//     if (typeof theif[key] === "object") {
//         for (let i in theif[key]) {
//             console.log(`Property ${i} has value ${theif[key][i]} `)
//         }
//     } else {
//         console.log(`Property ${key} has value ${theif[key]} `)
//     }
// };

// delete theif.colors.hair

// console.log(theif);

// console.log(Object.keys(theif).length);


//---------------------- O B J E C T METHOD-------------------------------------------

// const person = {
//     name: "Otabek",
//     surname: "Fayziyev",
//     age: 19,
//     contact: {
//         phone: 906746297,
//         email: "fayziyevotabek32@gmail.com"
//     },
//     adress: {
//         city: "Karshi",
//         nightborhood: "Aralovul",
//         street: "Ozodlik",
//         Num: 3
//     },
//     eduDegree: "bachelor"
// };

// for (let key in person) {
//     if (typeof person[key] === "object") {
//         for (let i in person[key]) {
//             console.log(`${i}:  ${person[key][i]}`);
//         }
//     } else {
//         console.log(`${key}: ${person[key]}`);
//     }
// };

// console.log(person);
// const { name, surname, age, eduDegree } = person;
// console.log(`person's name is ${name}`);
// console.log(`person's surname is ${surname}`);
// console.log(`person's age is ${age} years old`);
// console.log(`person's education degree is ${eduDegree}`);

// const { phone, email } = person.contact
// console.log(`Contact information of ${name}, Phone: ${phone} Email: ${email} `);



// --------------- A R R A Y METHOD - ----------------

const arr = [32, 23, 54, 75, 42, 1];
// arr.sort((a,b) => a-b)
arr.sort();
function compareFn(a, b) {
    return a - b
};
console.log(arr);

// arr.forEach(function (value, index, array) {
//     console.log(`${index}: ${value} into arr ${array}`);
// })

// arr.forEach((value, index, array) => {
//     console.log(`${index}: ${value} into arr ${array}`);                        //FOREACH
// });

// arr[0] = 0;
// console.log(arr);

// for (const iterator of arr) {
//     console.log(iterator);
// }

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// // arr.pop()                          // Removes the last element from an array and returns it = 6
// // arr.push(7)                        // Appends new elements to the end of an array = 7
// // arr.shift()                        // Removes the first element from an array
// // arr.unshift(3)                     // Inserts new elements at the start of an array
// console.log(arr);



// const movies = prompt("What's your favorite movies?", "");
// const userMovies = movies.split(/,\s*|\s+\.?\s*/);
// userMovies.sort();
// console.log(userMovies);


