console.log("Hello World! I'm printing from `assignment.js`");

var mapping = {
  "a": 0,  "b": 1,  "c": 2,  "d": 3,  "e": 4,
  "f": 5,  "g": 6,  "h": 7,  "i": 8,  "j": 9,
  "k": 10, "l": 11, "m": 12, "n": 13, "o": 14,
  "p": 15, "q": 16, "r": 17, "s": 18, "t": 19,
  "u": 20, "v": 21, "w": 22, "x": 23, "y": 24,
  "z": 25
}

var alphabet = Object.keys(mapping);
// alphabet => ["a", "b", "c", ..., "z"]
// Q: what is alphabet[14]? => "o"

/*
 * Takes a lowercase letter (a-z) and returns its index in the alphabet (a=0, b=1, etc.)
 * ----
 * Params:
 * > letter - letter you'd like to get the index of
 *
 * Returns:
 * > the index
 */
function letterToIndex(letter) {
  // TODO: Complete this function
}

/*
 * Takes the index of the letter and returns the letter itself. Numbers greater than 25 wrap around!
 * E.g., 0 => a, 1 => b, 25 => z, 26 => a, etc.
 * ----
 * Params:
 * > index - index of the letter you'd like to get
*
* Returns:
 * > the letter
 */
function indexToLetter(index) {
  // TODO: Complete this function
}

/*
 * Shifts the given letter by a given length.
 * ----
 * Params:
 * > original - letter you'd like to shift
 * > shift - length to transpose letters by
 *
 * Returns:
 * > char - shifted letter
 */
function shiftLetter(original, shift) {
  // TODO: Complete this function.
}


/*
 * Encrypts the given string using the Caesar cipher and the given length.
 * ----
 * Params:
 * > original - string you would like to encrypt
 * > shift - given transposition length
 *
 * Returns:
 * > string - the encrypted version of the given string using the given length
 */

function encryptCaesar(original, shift) {
  // TODO: Complete this function.
}


/*
 * Determines whether the first string is the encrypted version of the second with a given encryption length.
 * ----
 * Params:
 * > encrypted - given encryption
 * > shift - given transposition length
 * > guess - your guess for the unencrypted string
 *
 * Returns:
 * > boolean - if encrypted is a valid encryption of guess with given length
 */

function checkCaesarWithShift(encrypted, shift, guess) {
  // TODO: Complete this function.
}


/*
 * Determines whether the first string is the encrypted version of the second.
 * Try to use checkCaesarWithShift!
 * ----
 * Params:
 * > encrypted - given encryption
 * > guess - your guess for the unencrypted string
 *
 * Returns:
 * > boolean - if encrypted is a valid encryption of guess
 */

function checkCaesar(encrypted, guess) {
  // TODO: Complete this function.
}


/*
 * *** EXTENSION ***
 * ----
 * Encrypts the given string using the Vigenere cipher and the given keyword.
 * ----
 * Params:
 * > original - string you would like to encrypt
 * > length - given keyword
 *
 * Returns:
 * > string - the encrypted version of the given string using the given keyword
 */

function encryptVigenere(original, keyword) {
  // TODO: Complete this function.
}
