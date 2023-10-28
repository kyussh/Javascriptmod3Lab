//Question 1

function makeCounter() {
    let currentCount = 0;
    return function() {
    currentCount++;
    console.log(currentCount)
    return currentCount;
    };
    }
    let counter1 = makeCounter();
    let counter2 = makeCounter();
    counter1(); // 1
    counter1(); // 2
    
    counter2(); // 1 - it's independent since it restarts from 1
    counter2(); // 2
    function makeCounterB(startFrom) {
    let currentCount = startFrom;
    return function() {
    currentCount++;
    console.log(currentCount)
    return currentCount;
    };
    }
    let counter3 = makeCounterB(5);
    counter3(); // 6
    counter3(); // 7
    counter3(); // 8
    function makeCounterC(startFrom, incrementBy) {
    let currentCount = startFrom;
    return function() {
    currentCount += incrementBy;
    console.log(currentCount)
    return currentCount;
    };
    }
    let counter4 = makeCounterC(10, 5);
    counter4(); // 15
    counter4(); // 20

    //Question 2

/* a) The order in which the tests will print is as follows:

#4: Not delayed at all
#3: Delayed by 0ms
#1: Delayed by 100ms
#2: Delayed by 20ms
This order is determined by the setTimeout function calls and their delay times. 
Test #4 is not delayed at all and will print immediately. Test #3 has a delay of 0ms but is 
still placed in the event queue, so it will print after #4. Tests #1 and #2 have delays of 100ms 
and 20ms, so they will print after #3.
*/

//b) 
const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};

//c)
setTimeout(delayMsg, 15000, '#5: Delayed by 15 seconds');


//d) 
const timeoutID = setTimeout(delayMsg, 15000, '#5: Delayed by 15 seconds');
clearTimeout(timeoutID);

//Question 3

function debounce(func) { //a)
    let timeout;
    return function() {
   
    
    clearTimeout(timeout);
    timeout = setTimeout(func, 1000);
    };
    }
    function debounceB(func, ms) { //b)
    let timeout;
    return function() {

    clearTimeout(timeout);
    
    timeout = setTimeout(func, ms);
    };
    }
    function printMeC(msg) {
    console.log(`printing debounced message c: ${msg}`)
    }
    printMeC = debounceC(printMeC, 1200)
    setTimeout( printMeC, 100, 'msg #1');
    setTimeout( printMeC, 200, 'msg #2');
    setTimeout( printMeC, 300, 'msg #3');
    function debounceC(func, ms) { //c)
    let timeout;
    return function(msg) {
  
    clearTimeout(timeout);

    timeout = setTimeout(func, ms, msg);
    };
    }

    //Question 4

    function printFibonacci() { 
        let first = 1;
        let second = 1;
        console.log(first)
        console.log(second)
        setInterval(function printNext() {
        let next = first+second;
        console.log(next)
        first = second; 
        second = next; 
        }, 1000)
        }
        function printFibonacciTimeouts() { 
        let [first, second] = [1, 1]
        console.log(first)
        console.log(second)
        setTimeout(function printNext(first, second) {
        let next = first+second;
        console.log(next);
      
        setTimeout(printNext, 1000, second, next);
        }, 1000, first, second);
        }
        function printFibonacciLimit(limit) {
        let first = 1;
        let second = 1;
        console.log(first)
        console.log(second)
        let counter = 2; 
        let intervalRef = setInterval(function printNext() {
        let next = first+second;
        console.log(next)
        first = second; 
        second = next; 
        
        counter++; 
        
        if (counter == limit) clearInterval(intervalRef) 
        }, 1000)
        }

    //Question 5

    let car = {
        make: "Porsche",
        model: '911',
        year: 1964,
        description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
        }
        };
        
        car.description(); //works
        /*c) Works, however, prints new year value below instead of original,
        because the object has changed since the timeout was set up*/
        setTimeout(() => car.description(), 200); //a)
        car = {...car, year: 2015} //b
        let describeCar = car.description.bind(car); //d)
        setTimeout(describeCar, 400); //noq works
        car = {...car, year: 2020} //e) even if overriden the year it keeps the bound value

    //Question 6 

    //a) assumes two arguments and passes them through
Function.prototype.delay = function(ms) {
    let originalFunction = this;
    return function(arg1, arg2) {
    setTimeout(originalFunction, ms, arg1, arg2);
    }
    };
    multiply.delay(200)(5, 5); // prints 25 after 200 milliseconds
    Function.prototype.delayB = function(ms) {
    let originalFunction = this;
    return function() {
    setTimeout(() => originalFunction.apply(this, arguments), ms);
    }
    };
    function multiply4(a, b, c, d) {
    
    console.log( a * b * c * d);
    }
    multiply4.delayB(500)(5, 5, 5, 5); // prints 625 after 500 milliseconds

    //Question 7

    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        }
        Person.prototype.toString = function() {
        return `${this.name} is a ${this.age} year old ${this.gender}`
        }
    const person1 = new Person('James Brown', 73, 'male')
        console.log('person1: '+person1)
        const person2 = new Person('Diana Ross', 78, 'female')
        console.log('person2: '+person2)
        const person3 = new Person('Aretha Franklin', 76, 'female')
        console.log('person3: '+person3)
        function Student(name, age, gender, cohort) {
        Person.call(this, name, age, gender);
        
    this.cohort = cohort
        }
        Student.prototype.toString = function() {
        return `${this.name} is a ${this.age} year old ${this.gender} student in the
        ${this.cohort} cohort`
        }
        const student1 = new Student('Alice Mackenzie', 23, 'female', 'se-au-ft-1jan23')
        console.log('student1: '+student1)
        const student2 = new Student('Gavin Williams', 31, 'male', 'se-au-ft-1jan23')
        console.log('student2: '+student2)

        //Question 8

        class PrecisionClock extends DigitalClock {
            constructor(prefix, precision) {
            super(prefix);
            this.precision = precision ? precision : 1000;
            }
            start() {
            this.display();
            this.timer = setInterval(() => this.display(), this.precision);
            }
            }
            const myPrecisionClock = new PrecisionClock('my precision clock:', 2000)
            myPrecisionClock.start()
            class AlarmClock extends DigitalClock {
            constructor(prefix, wakeupTime) {
            super(prefix);
            this.wakeupTime = wakeupTime ? wakeupTime : '07:00'
            }
            checkDisplay() {
            const now = new Date();
            const wakeupHours = this.wakeupTime.substring(0, 2);
            const wakeupMins = this.wakeupTime.substring(3)
            if (now.getHours() == wakeupHours && now.getMinutes() == wakeupMins) {
            console.log('Wake Up!');
            this.stop();
            } else {
            this.display();
            }
            }
            start() {
            this.checkDisplay();
            this.timer = setInterval(() => this.checkDisplay(), 1000);
            }
            }
            
            const myAlarmClock = new AlarmClock('my alarm clock:', '17:00')
            myAlarmClock.start()

        //Question 9 

        function randomDelay() {
            
            let delay = Math.ceil(Math.random() * 20);
            return new Promise(resolve => setTimeout(resolve, delay*1000));
            }
            randomDelay()
            .then((delay) => console.log('There appears to have been a delay.'));
            function randomDelayB() {
            let delay = Math.ceil(Math.random() * 20);
            return new Promise((resolve, reject) =>
            // if even delay the resolve function, if odd delay the reject function
            setTimeout((delay % 2 === 0) ? resolve : reject, delay*1000));
            }
            randomDelayB()
            .then(() => console.log('Successful delay'))
            .catch(() => console.log('Failed delay'));
            function randomDelayD() {
            let delay = Math.ceil(Math.random() * 20);
            return new Promise((resolve, reject) =>
            setTimeout((delay % 2 === 0) ? resolve : reject, delay*1000, delay));
            }
            randomDelayD()

//Question 10
    //a)
        import fetch from 'node-fetch';

globalThis.fetch = fetch;

async function fetchURLData(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}

fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log(data))
  .catch(error => console.error(error.message));

//b)

// Using the original fetchURLData function
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));

fetchURLData('https://jsonplaceholder.typicode.com/nonexistent-url')
.then(data => console.log(data))
.catch(error => console.error(error.message));

// Using the new async/await fetchURLData function
(async () => {
try {
  const data = await fetchURLData('https://jsonplaceholder.typicode.com/todos/1');
  console.log(data);
} catch (error) {
  console.error(error.message);
}

try {
  const data = await fetchURLData('https://jsonplaceholder.typicode.com/nonexistent-url');
  console.log(data);
} catch (error) {
  console.error(error.message);
}
})();

//c)

import fetch from 'node-fetch';

globalThis.fetch = fetch;

async function fetchURLData(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}

async function fetchAllURLs(urls) {
  const promises = urls.map(url => fetchURLData(url));
  return Promise.all(promises);
}

const urlsToFetch = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/nonexistent-url',
];

fetchAllURLs(urlsToFetch)
  .then(data => console.log(data))
  .catch(error => console.error(error.message));


