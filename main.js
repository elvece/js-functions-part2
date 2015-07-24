// Problem 1: Define a function called `oldestPerson` that takes an object with names as keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person.
var people = [
  {name: 'Chuck', age: 22},
  {name: 'Brian', age: 46},
  {name: 'Michelle', age: 16},
  {name: 'Mike', age: 102},
  {name: 'Barbara', age: 66}
];


function oldestPerson(keyValueObject) {
  var result;
  var newVar = 0;
  for (var i = 0; i < keyValueObject.length; i++) {
   if  (keyValueObject[i].age > newVar) {

       newVar = keyValueObject[i].age;
       result = keyValueObject[i].name;
     }
    }
    return result;
  }
oldestPerson(people);

//Problem 2: Define a function called `longestWord` that takes a string and returns the longest word in the string.
function longestWord(string) {
  var stringSplit = string.split(" ");
  var longest = 0;
  var answer = "";
  stringSplit.forEach(function(stringSplit){
    if (longest < stringSplit.length){
      longest = stringSplit.length;
      answer = stringSplit;
    }
  });
  return answer;
}

longestWord("This is a test sentence");

//Problem 3: Refactor the `longestWord` function so that it ignores punctuation.
/*pseudo code:
after spliiting, test for anything other than capital and lowercase letters
ignore anything other than capital or lowercase letters
*/
function longestWordIgnorePunc(string) {
  var stringIgnorePunc = string.replace(/[\.,-\/#'?!$%\^&\*;:{}=\-_`~()]/g,"");
  var split = stringIgnorePunc.split(" ");
  var longest = 0;
  var answer = "";
  split.forEach(function (stringIgnorePunc){
    if (longest < stringIgnorePunc.length){
      longest = stringIgnorePunc.length;
      answer = stringIgnorePunc;
    }
  });
  return answer;
}

longestWordIgnorePunc("Can I compare jennifer with jennifer's?");



//Problem 4: Define a function called `factorial` that takes a random number as an argument and then returns the factorial of that given number.
/*Pseudo Code: funcion (randomNumberInput){}
make sure input is a number
math: factorial is num*(num-1)
if, else?
*/
function factor(num) {
  var result = "";
  if (typeof(num) !== "number"){
    prompt("You did not enter a valid number. Please enter a valid number.");
  } else {
    var numToNumber = Number(num);
    result = numToNumber*(numToNumber-1);
  }
  return result;
}

factor(10);

//Bonus: Write a function called `palindrome` that takes a string as an argument and returns the string in reversed order. Return true if the string is the same as the reversed string, otherwise return false.
/*Pseudo Code:
copy string into a new array
split string into seperate characters
reverse the order of the characters in the array
maybe do this by using a loop and taking the first letter and placing it last? see if reverse function
if reverseString is same as originalString, return true, else, return fasle
then merge split characters back into a string
return final string
*/
function palindrome(string) {
  var split = string.split(" ");
  var holdArray = [];


}
palindrome("lucy");
