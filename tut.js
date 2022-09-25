// Math works the way you'd expect from Python -- just note the (optional) semicolons
1 + 1; // => 2
8 - 1; // => 7
10 * 2; // => 20
5 / 2; // => 2.5

// Mod: The "remainder" operator:
4 % 2; // => 0
5 % 2; // => 1
6 % 2; // => 0
10 % 26; // => 10

// Functions!
function addOne(x) {
  let answer = x + 1;
  console.log("You called addOne! The answer is " + answer) // Print to the console!
  return answer; // Just like Python!
}

function product(array) {
  var total = 0;
  for (var e in array) {
    total *= array;
  }
  return total;
}

// Calling functions is simple
addOne(5);

// You can compose calls to functions
addOne(product([1,2,3,4,5]));

// Returning in a function ends it early.
function product(array) {
  var total = 0;
  for (var e in array) {
    return e; // This function will return the first value of array
  }

  // This won't run (because of the return above)
  return total;
}

// Objects are like Python dictionaries
var object = {
  "theKey": 1,
  "anotherKey": "hello"
};

// Get values with bracket notation
object["theKey"] // => 1
object["anotherKey"] // => "hello"

///////////////////////////////
// CHECKPOINT! Time to complete `letterToIndex` in assignment.js.
// Note the "mapping" dictionary
///////////////////////////////

// Variables can be set and updated
let y = 5;
y = y + 2; // => 7

// Arrays are ordered lists of values, of any type.

var myArray = ["Hello", 45, true];
myArray[1]; // => 45

///////////////////////////////
// CHECKPOINT! Time to complete `indexToLetter` in assignment.js.
// Note the "alphabet" array
///////////////////////////////

// Arrays are mutable and of variable length.
myArray.push("World");
myArray.length; // => 4
myArray[3] = "Hello";

// Join all elements of an array with semicolon
var myArray0 = [32, false, "js", 12, 56,90];
myArray0.join(";") // => "32;false;js;12;56;90"
myArray0.join("") // => "32falsejs125690"

// Get subarray of elements from index 1 (include) to 4 (exclude)
myArray0.slice(1,4); // => [false,"js",12]

// Equalities
1 === 1; // => true
2 === 1; // => false
1 !== 1; // => false
2 !== 1; // => true

// Strings are concatenated with +
"Hello " + "world!"; // => "Hello world!"

// Or just using [] syntax
"This is a string"[5];  // => 'i'

// `length` is a property, so don't use ().
"Hello".length; // => 5

// The `if` structure works as you'd expect.
var count = 1;
if (count === 3) {
  // evaluated if count is 3
} else if (count === 4) {
  // evaluated if count is 4
} else {
  // evaluated if it's not either 3 or 4
}

// The `for` loop is the same as C and Java:
// initialization; continue condition; iteration.
for (var i = 0; i < 5; i++){
  // will run 5 times
}

// The for/in statement allows iteration over properties of an array
for (var x in myArray) {
  console.log(x)
}

///////////////////////////////
// CHECKPOINT! Time to complete `encryptCaesar` in assignment.js.
///////////////////////////////

// && is logical and, || is logical or
if (house.size === "big" && house.colour === "blue"){
  // Do stuff
}
if (colour === "red" || colour === "blue"){
  // Do stuff
}

///////////////////////////////
// CHECKPOINT! Time to complete `checkCaesar` in assignment.js.
///////////////////////////////
