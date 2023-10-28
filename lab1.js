//Question 1 

1. `"" + 1 + 0` //results in the string `"10"`.
2. `"" - 1 + 0` //results in the number ` -1`.
3. `true + false` //results in the number `1` (because `true` is treated as `1` and `false` as `0` in a numeric context).
4. `!true` //results in `false`.
5. `6 / "3"` //results in the number `2` (because the string "3" is converted to a number for the division operation).
6. `"2" * "3"` //results in the number `6` (because the strings are converted to numbers for the multiplication operation).
7. `4 + 5 + "px"` //results in the string `"9px"` (the addition is performed before the concatenation).
8. `"$" + 4 + 5` //results in the string `"$45"` (concatenation is performed from left to right).
9. `"4" - 2` //results in the number `2` (the string "4" is converted to a number for the subtraction).
10. `"4px" - 2` //results in `NaN` (Not-a-Number) because the string "4px" cannot be converted to a number for subtraction.
11. `" -9 " + 5` //results in the string `" -9 5"` (concatenation).
12. `" -9 " - 5` //results in the number ` -14` (the string " -9 " is converted to a number for subtraction).
13. `null + 1` //results in the number `1` (null is treated as `0` in a numeric context).
14. `undefined + 1` //results in `NaN` (undefined cannot be converted to a number for addition).
15. `undefined == null` //results in `true` (they are considered equal in loose equality).
16. `undefined === null` //results in `false` (they are not the same in strict equality).
17. `" \t \n" - 2` //results in the number ` -2` (the string is converted to a number for subtraction, and whitespace is trimmed).

//Question 2

addition = three + four //results in the string "34". In this case, JavaScript performs string concatenation because both three and four are strings.

multiplication = three * four //results in the number 12. JavaScript converts the strings "3" and "4" to numbers and performs multiplication. This is because the * operator is defined for mathematical operations.

division = three / four //results in the number 0.75. JavaScript converts the strings "3" and "4" to numbers and performs division. This is because the / operator is also defined for mathematical operations.

subtraction = three - four //results in the number -1. JavaScript converts the strings "3" and "4" to numbers and performs subtraction. This is because the - operator is defined for mathematical operations.

lessThan1 = three < four //results in the boolean true. JavaScript compares the strings lexicographically, and since "3" comes before "4" in lexicographic order, the expression is true.

lessThan2 = thirty < four //results in the boolean false. Similar to the previous case, JavaScript compares the strings lexicographically, and "30" comes after "4," so the expression is false.

//While the values produced by these expressions are technically correct based on JavaScript's rules, 
//the potential for confusion arises because JavaScript performs implicit type conversion when using 
//operators like +, -, *, and /. To avoid unexpected behavior and ensure clarity, it's recommended 
//to explicitly convert values to the appropriate data type when performing mathematical operations. 
//Here's how you can fix the expressions to make them more intuitive:

let addition = Number(three) + Number(four);
let multiplication = Number(three) * Number(four);
let division = Number(three) / Number(four);
let subtraction = Number(three) - Number(four);
let lessThan1 = Number(three) < Number(four);
let lessThan2 = Number(thirty) < Number(four);
//By explicitly converting the strings to numbers using Number(), you make it clear that you intend to perform mathematical operations, and the results will be more predictable.

//Question 3

//The following console.log messages will print:

"zero is true" //(for condition 2)
"negative is true" //(for condition 4)
"positive is true" //(for condition 5)
//The other messages will not be printed because their respective conditions are falsy.

//Question 4

let a = 2, b = 3;
let result = `${a} + ${b} is ${a + b < 10 ? 'less than 10' : 'greater than 10'}`;

//The += operator is an assignment operator that is used for concatenating strings or adding a value to an existing variable. 


//Question 5

//a) Using function expression syntax:

const getGreeting = function(name) {
  return 'Hello ' + name + '!';
};

//b) Using arrow function syntax:

const getGreeting = (name) => 'Hello ' + name + '!';


//Question 6

//a)
const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya', // Add the lastName property
    greeting(person) {
      let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
      console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
      return 'Nice to meet you.';
    }
  }
  
  //b) getCatchPhrase(person) 
  {
  return person.numFingers === 6 ? 'You killed my father. Prepare to die.' : 'Nice to meet you.';
}
//c)

const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
      let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
      console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) =>
      person.numFingers === 6 ? 'You killed my father. Prepare to die.' : 'Nice to meet you'
  };
    
  //Question 7 

  const basketballGame = {
    score: 0,
    fouls: 0,
    freeThrow() {
      this.score++;
      return this; // Enable function chaining
    },
    basket() {
      this.score += 2;
      return this; // Enable function chaining
    },
    threePointer() {
      this.score += 3;
      return this; // Enable function chaining
    },
    halfTime() {
      console.log('Halftime score is ' + this.score + ' with ' + this.fouls + ' fouls.');
      return this; // Enable function chaining
    },
    printFinalScore() {
      console.log('Full-time score is ' + this.score + ' with ' + this.fouls + ' fouls.');
      return this; // Enable function chaining
    },
    incrementFouls() {
      this.fouls++;
      return this; // Enable function chaining
    }
  };

  basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime()
  .incrementFouls()
  .freeThrow()
  .printFinalScore();

  //Question 8

  //a)
  function printObjectProperties(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        console.log(`${prop}: ${obj[prop]}`);
      }
    }
  }
  
//b)
const newYork = {
    name: 'New York City',
    population: 8_400_000,
    state: 'New York',
    founded: '1624',
    timezone: 'America/New_York'
  };
  
  printObjectProperties(newYork);

  //Question 9

//a)
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = teamSports.slice(); 
moreSports.push('Basketball', 'Tennis');
moreSports.unshift('Soccer');

//b)
let dog1 = 'Bingo';
let dog2 = 'Rex'; // or any other new value

//c)
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = { ...cat1, name: 'Whiskers' };

//d) If you print the original teamSports, dog1, and cat1 variables, you'll find that they have not changed. This is because you haven't modified them directly in parts a, b, or c.

//e) To ensure the originals remain independent in parts a and c, you can create deep copies of the objects. Here's how to modify parts a and c:

// Deep copy teamSports to moreSports using JSON serialization: a)

let moreSports = JSON.parse(JSON.stringify(teamSports));


//c) Deep copy cat1 to cat2:

let cat2 = JSON.parse(JSON.stringify(cat1));
cat2.name = 'Whiskers';

//Question 10 

//a)
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
  
  const person1 = new Person("Alice", 30);

//b)
  const person2 = new Person("Bob", 25);

//c)
console.log("Person 1:", person1);
console.log("Person 2:", person2);

//d)
class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.human = true;
    }
  }
  
  const person3 = new PersonClass("Carol", 35);

  //e)
 // For the constructor function:

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = function() {
    return this.age >= 16;
  };
}
console.log(person1.canDrive()); // true if age is 16 or older

//For the class PersonClass:

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }

  canDrive() {
    return this.age >= 16;
  }
}
console.log(person3.canDrive()); // true if age is 16 or older



