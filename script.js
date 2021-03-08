console.log('Hi there! 🔥');

/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/
const maxChar = (string) =>
  [...new Set(string.split(''))].map((char) => ({
    char,
    freq: string.split('').filter((el) => el === char).length,
  }));

console.log(maxChar('ciaooooo'));
/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/

const anagrams = (str1, str2) =>
  [...str1.replace(/\W/gi, '')]
    .sort()
    .map((char) => char.toLowerCase())
    .join('') ===
  [...str2.replace(/\W/gi, '')]
    .sort()
    .map((char) => char.toLowerCase())
    .join('');

console.log(anagrams('rail saefty', 'faiyr tales'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));
console.log(anagrams('bye4 there', 'Bye the4re'));
console.log(anagrams('Hi there', 'Bye there'));

/* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.


--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/

const anagramAdayKeepsTheDocAway = (word, possibleAnagrams) =>
  possibleAnagrams.reduce((acc, cv) => {
    if (
      cv.toLowerCase().split('').sort().join('') ===
      word.toLowerCase().split('').sort().join('')
    )
      acc.push(cv);
    return acc;
  }, []);

console.log(
  anagramAdayKeepsTheDocAway('listen', [
    'enlists',
    'google',
    'inlets',
    'banana',
    'lsiten',
    'enlist',
  ])
);

/* 4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
 */
const palindromes = (string) => string.split('').reverse().join('') === string;
console.log(palindromes('abba'));
console.log(palindromes('abcdefg'));
console.log(palindromes('osso'));

/* 5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */

const reverseInt = (num) => {
  const list = num.toString().split('').reverse().join('');
  let result = '';
  if (list[list.length - 1] === '-') {
    result += list[list.length - 1] + list.slice(0, -1);
  } else {
    return parseInt(list);
  }
  return parseInt(result);
};

console.log(reverseInt(15));
console.log(reverseInt(981));
console.log(reverseInt(500));
console.log(reverseInt(-15));
console.log(reverseInt(-90));
/* 6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */

/* 7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */

/* 8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

/* 9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

/* 10) SPYRAL MATRIX

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/
