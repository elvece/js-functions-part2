// Problem 1: Define a function called `oldestPerson` that takes an object with names as keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person.
var people = [
  {name: 'Chuck', age: 22},
  {name: 'Brian', age: 46},
  {name: 'Michelle', age: 16},
  {name: 'Mike', age: 102},
  {name: 'Barbara', age: 66}
];


function oldestPerson() {
  var result;
  var newVar = 0;
  for (var i = 0; i < people.length; i++) {
   if  (people[i].age > newVar) {

       newVar = people[i].age;
       result = people[i].name;
     }
    };
    return result;
  }

console.log(oldestPerson());

//Problem 2: Define a function called `longestWord` that takes a string and returns the longest word in the string.

  // var result = 0;
  // for (var i = 0; i > strNew.length; i++){
  //   if (strNew[i].length > result) {
  //     strNew[i].length = result;
  //   }
  //   return result;
  // }
  function longestWord(str) {
  var strNew = [];
  strNew = str.split(" ");
  var sort = strNew.sort(function(a,b){
    return b.length - a.length;
  });
  return sort[0];
};
console.log(longestWord("This is a test sentence."));










//Problem 3: Refactor the `longestWord` function so that it ignores punctuation.


//Problem 4: Define a function called `factorial` that takes a random number as an argument and then returns the factorial of that given number.

//Bonus: Write a function called `palindrome` that takes a string as an argument and returns the string in reversed order. Return true if the string is the same as the reversed string, otherwise return false.
