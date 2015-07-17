// Problem 1
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
