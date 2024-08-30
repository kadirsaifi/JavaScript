// primitive

// 7 types of of primitive datataypes :- string, Number, Boolean, Null, undefine, symbol, BigInt

const Stringname = "Abdul Kadir";

const NumberScore = 200;

const BooleanuserLogin = false;

const Nulluserage = null;

let UndefineuserEmail;

const id = Symbol("222");

const anotherId = Symbol("222");

const bigInt = 4545454545454545454545445454;

console.log(id == anotherId);

// Refrence Datatypes (non Primitives)

// Array, object, function

const hero = ["salman", "sharukh", "Amir"];
let obj = {
  name: "abdul",
  age: 26,
};

console.log(hero);

const Myfunction = function () {
  console.log("Hello World");
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack => primitive dataTypes, Heap=> Non Primitive DataTypes

let myname = "abdul";

let anotherName = myname;

anotherName = "saifi";

console.log(myname);
console.log(anotherName);

let userone = {
  email: "saifi@gmail.com",
  age: 28,
};

userTwo = userone;
userTwo.email = "abdulkadir@gmail.com";

console.log(userone.email);
console.log(userTwo.email);
