//Question 1
function ucFirstLetters(str) {
    let newString = '';
    let words = str.split(' ');
    for (let word of words) {
    if (newString.length != 0) newString += ' '
    newString += word.charAt(0).toUpperCase() + word.substring(1)
    }
    return newString;
    }

//Question 2 
function truncate(str, max) {
    if (str.length > max)
    {
    return str.substring(0, max) + '...';
    }
    else {
    return str;
    }
    }
    function truncate2(str, max) {
    return (str.length > max) ? str.substring(0, max) + '...' : str;
    }

    //Question 3
    const animals = ['Tiger', 'Giraffe']
console.log(animals)
animals.push('Hippo');
animals.push('Rhino')
console.log(animals)
animals.unshift('Penguin')
animals.unshift('Lion')
console.log(animals)
animals.sort()
console.log(animals)
function replaceMiddleAnimal(newValue) {
let halfway = animals.length / 2;
animals[halfway] = newValue
}
console.log(animals)
function findMatchingAnimals(beginsWith) {
return animals.filter(animal =>
animal.toLowerCase().startsWith(beginsWith.toLowerCase()))
}

//Question 4
function camelCase(cssProp) {
    const words = cssProp.split('-');
    let result = words[0];
  
    for (let i = 1; i < words.length; i++) {
      result += words[i][0].toUpperCase() + words[i].slice(1);
    }
  
    return result;
  }
  
  // Test 
  console.log(camelCase('margin-left')); // 'marginLeft'
  console.log(camelCase('font-size')); // 'fontSize'
  console.log(camelCase('background-color')); // 'backgroundColor'
  
  //Question 5

 /* a) The code is not returning the correct answer because when you use the toFixed(2) method, 
  it converts the numbers to strings with two decimal places. When you concatenate these strings, 
  you are performing string concatenation, not numerical addition. As a result, 
  you are concatenating the two string representations of the numbers, which leads to the wrong 
  result.*/

  function currencyAddition(float1, float2) {
    let wholeNumber1 = float1 * 100;
    let wholeNumber2 = float2 * 100;
    return (wholeNumber1 + wholeNumber2) / 100
    }
    function currencyOperation(float1, float2, operation) {
    let wholeNumber1 = float1 * 100;
    let wholeNumber2 = float2 * 100;
    let wholeResult = 0;
    switch (operation) {
    case '+' :
    wholeResult = wholeNumber1 + wholeNumber2; break;
    case '*' :
    wholeResult = wholeNumber1 * wholeNumber2; break;
    case '-' :
    wholeResult = wholeNumber1 - wholeNumber2; break;
    case '/' :
    wholeResult = wholeNumber1 / wholeNumber2; break;
    default :
    wholeResult = wholeNumber1 + wholeNumber2;
    }
    //divide by the same factor we multiplied by
    return wholeResult / 100;
    }
    function currencyOperation2(float1, float2, operation, numDecimals) {
    let factor = 10**numDecimals; /*exponential. for numDecimals=2, would be 10 to the
    power of 2, or 10*10*/
    let wholeNumber1 = float1 * factor;
    let wholeNumber2 = float2 * factor;
    let wholeResult = 0;
    switch (operation) {
    case '+' :
    wholeResult = wholeNumber1 + wholeNumber2; break;
    case '*' :
    wholeResult = wholeNumber1 * wholeNumber2; break;
    case '-' :
    wholeResult = wholeNumber1 - wholeNumber2; break;
    case '/' :
    wholeResult = wholeNumber1 / wholeNumber2; break;
    default :
    wholeResult = wholeNumber1 + wholeNumber2;
    }
    //Round off any remaining decimals and divide by the same factor you multiplied by
    return Math.round(wholeResult) / factor;
    }

    //Question 6

    function unique(duplicatesArray) {
        return Array.from(new Set(duplicatesArray));
      }
      
      // Test the unique function with the provided arrays
      const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
      const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
      
      console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
      console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]
      
//Question 7

//a) 

function getBookTitle(bookId) {
  const book = books.find(book => book.id === bookId);
  return book ? book.title : "Book not found";
}
// Test the getBookTitle function
console.log(getBookTitle(2)); // 'To Kill a Mockingbird'
console.log(getBookTitle(6)); // 'Book not found'

//b)
function getOldBooks() {
  return books.filter(book => book.year < 1950);
}
// Test the getOldBooks function
console.log(getOldBooks());

//c) 
function addGenre() {
  return books.map(book => ({ ...book, genre: 'classic' }));
}
// Test the addGenre function
console.log(addGenre());

//d) 

function getTitles(authorInitial) {
  return books
    .filter(book => book.author.startsWith(authorInitial))
    .map(book => book.title);
}
// Test the getTitles function
console.log(getTitles('G')); // ['George Orwell']

//e) 
function latestBook() {
  let latest = null;
  books.forEach(book => {
    if (!latest || book.year > latest.year) {
      latest = book;
    }
  });
  return latest;
}

//Question 8 
let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
    };

function sumSalaries(salaries) {
    let totalSalaries = 0;
    //destructured Object.entries in for...of loop
    for (let [name, salary] of Object.entries(salaries)) {
    totalSalaries += salary;
    }
    return totalSalaries;
    }
    
    console.log(sumSalaries(salaries))
    function topEarner(salaries) {
    let topSalary = 0;
    let topEarner = '';
    //for...in loop to access object properties
    for (let name in salaries) {
    if (salaries[name] > topSalary) {
    topSalary = salaries[name];
    topEarner = name;
    }
    }
    return topEarner;
    }
    console.log(topSalary(salaries) + ' earns the most')

    //Question 10 

    const today = new Date();
    console.log('Current time is ' + today.toLocaleTimeString())
    console.log(today.getHours() + ' hours have passed so far today')
    console.log((today.getHours()*60 + today.getMinutes()) + ' minutes have passed today')
    console.log((today.getHours()*60*60 + today.getMinutes()*60 + today.getSeconds()) + 'seconds have passed today')
    const birthday = new Date('1990-01-01')
    let years = today.getFullYear() - birthday.getFullYear();
    let months = today.getMonth() - birthday.getMonth();
    let days = today.getDate() - birthday.getDate();
    console.log(`I am ${years} years, ${months} months and ${days} days old`)
    function daysInBetween(date1, date2) {
    let differenceMS = date2 - date1;
    let millisecondsPerDay = 24 * 60 * 60 * 1000;
    let differenceDays = Math.floor(differenceMS / millisecondsPerDay);
    return Math.abs(differenceDays);
    }
    console.log(`Days between ${birthday.toLocaleDateString()} and
    ${today.toLocaleDateString()}: ${daysInBetween(birthday, today)}`)
    console.log(`Days between 2022-01-15 and 2023-01-01: ${daysInBetween(new Date('2023-01-01'), new Date('2022-01-15'))}`)