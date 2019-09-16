// // Some Concepts of ES6

// const box6 = {
//   color: 'green',
//   position: 1,
//   clickMe: function() {
//     const g = '.green';
//     document.querySelector(g).addEventListener('click', () => {
//       const str = `This is box number ${this.position} and it is ${this.color}`;
//       alert(str);
//     });
//   }
// };
// box6.clickMe();

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.myFriends = function(friends) {
//   const arr = friends.map(el => `${this.name} is friends with ${el}`);
//   console.log(arr);
// };
// const friends = [1, 2, 3, 4, 5];
// new Person('A').myFriends(friends);

// // Destructing
// const [name, age] = ['test', 1];
// console.log(name, age);

// const obj = {
//   firstName: 'Test',
//   lastName: 'T'
// };
// const { firstName, lastName } = obj;
// console.log(firstName, lastName);

// const { firstName: a, lastName: b } = obj;
// console.log(a, b);

// function calcAgeRetirement(year) {
//   const age = new Date().getFullYear() - year;
//   return [age, 65 - age];
// }
// const [age2, retirement] = calcAgeRetirement(1990);
// console.log(age2, retirement);

// const boxes = document.querySelectorAll('.box');
// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(cur => (cur.style.backgroundColor = 'dodgerblue'));

// for (const cur of boxesArr6) {
//   if (cur.className === 'box blue') {
//     continue;
//   }
//   cur.textContent = 'I changed to blue';
// }

// const ages = [1, 2, 3, 45, 6, 0, 8, 8, 5, 200];
// console.log(ages.findIndex(cur => cur > 45));
// console.log(ages.find(cur => cur >= 18));

// function addAges(a, b, c) {
//   return a + b + c;
// }
// const ag = [10, 10, 10];
// const sum3 = addAges(...ag);
// console.log(sum3);

// const familly1 = ['a', 'b', 'c', 'd'];
// const familly2 = ['e', 'f', 'g'];
// const allFamilies = [...familly1, ...familly2, 'h'];
// console.log(allFamilies);

// const h = document.querySelector('h1');
// const boxes1 = document.querySelectorAll('.box');
// const all = [h, ...boxes1];

// Array.from(all).forEach(cur => (cur.style.color = 'purple'));

// // REST parameters
// function isFullAge(limit, ...years) {
//   years.forEach(cur => console.log(new Date().getFullYear() - cur >= limit));
// }
// isFullAge(10, 2001, 2010, 1965, 2000, 2019);

// // Default parameters

// function Person(
//   firstName,
//   yearOfBirth,
//   lastName = 'TestPerson',
//   nationality = 'Brazilian'
// ) {
//   this.firstName = firstName;
//   this.yearOfBirth = yearOfBirth;
//   this.lastName = lastName;
//   this.nationality = nationality;
// }

// const john = new Person('John', 1998);
// const emilly = new Person('Emilly', 1999, 'Doe', 'American');
// console.log(john, emilly);

// // MAPS
// const question = new Map();
// question.set('question', 'test Question');
// question.set(1, 'test1');
// question.set(2, 'test2');
// question.set(3, 'test3');
// question.set(3, 'test4');
// question.set('correct', 3);
// question.set(true, 'Correct answer :D');
// question.set(false, 'wrong, plz try again');

// console.log(question.get('question'));
// console.log(question.size);

// if (question.has(4)) {
//   question.delete(4);
// }

// // question.forEach((value, key) => {
// //   console.log(`This is ${key}, n it's set to ${value}`);
// // });

// for (let [key, value] of question.entries()) {
//   console.log(`This is ${key}, n it's set to ${value}`);
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value} from TYPEOF`);
//   }
// }

// // const answer = parseInt(prompt('Write the correct answer'));

// // console.log(question.get(answer === question.get('correct')));

// // Classes

// class Person123 {
//   constructor(firstName, lastName, yearOfBirth) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//   }
//   calculateAge() {
//     const age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
//   }
// }

// class Athlete extends Person123 {
//   constructor(firstName, lastName, yearOfBirth, olympicGames, medals) {
//     super(firstName, lastName, yearOfBirth);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
//   }

//   wonMedal() {
//     this.medals++;
//     console.log(this.medals);
//   }
// }

// const john123 = new Athlete('John', 'Doe', 1999, 10, 3);
// john123.wonMedal();
// john123.calculateAge();

// Coding Challenge 8

class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numberTrees) {
    super(name, buildYear);
    this.area = area;
    this.numberTrees = numberTrees;
  }

  treeDensity() {
    const density = this.numberTrees / this.area;
    console.log(
      `${this.name} has a tree density of ${Math.floor(
        density
      )} trees per square KM`
    );
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }
  classifyStreet() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(
      `${this.name}, built in ${this.buildYear}, is a ${classification.get(
        this.size
      )} street.`
    );
  }
}

const parkArr = [
  new Park('Green Park', 1880, 8.2, 123),
  new Park('Jane Doe Park', 1234, 10.4, 3450),
  new Park('John Doe Park', 1500, 90.3, 2)
];

const streetsArr = [
  new Street('Oak Street', 1000, 23.4, 3),
  new Street('Blue Street', 2000, 11.2, 2),
  new Street('Tiny Street', 1995, 20.3),
  new Street('Tiny tiny Street', 1002, 20.3, 1)
];

function calc(arr) {
  const sum = arr.reduce((prev, cur) => prev + cur, 0);

  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log('------------------------Parks Reports------------------------');
  // Density
  p.forEach(el => el.treeDensity());

  // Average Age
  const ages = p.map(e => new Date().getFullYear() - e.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(
    `Our ${p.length} parks have an average of ${Math.floor(avgAge)} years.`
  );

  // Which park has more than 1000 trees
  const idx = p.map(el => el.numberTrees).findIndex(el => el >= 1000);
  console.log(`${p[idx].name} has more than 1000 trees`);
}
function reportStreets(s) {
  console.log('-----------------------Streets Reports-----------------------');
  // Total and Avg length of the town's streets
  const [totalLength, avgLength] = calc(s.map(el => el.length));
  console.log(
    `Our ${s.length} streets have a total length of ${Math.floor(
      totalLength
    )}km, with an average of ${Math.floor(avgLength)}km.`
  );

  // Classify sizes
  s.forEach(el => el.classifyStreet());
}

reportParks(parkArr);
reportStreets(streetsArr);
