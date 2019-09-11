//*************************************************
// Function Constructors [Most popular]
//*************************************************

/*
const Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job
}

Person.prototype.calculateAge = function() {    
    return console.log(this.name + ' has ' + (2019 - this.yearOfBirth) + ' years old');
};

const alertName = prompt('Tell us what\'s your name?');
const alrtYearOfBirth = Number(prompt('Tell what\'s your birth year?'));
const alertJob = prompt('What do you do for living?'); 

const matheus = new Person(alertName, alrtYearOfBirth, alertJob);
matheus.calculateAge();

const camille = new Person('Camille', 2001, 'Architect');
camille.calculateAge();


console.log(matheus);
console.log(camille);
*/

//*************************************************
// Objects.create [Common but not that usable]
//*************************************************

/*
const personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth);
    }
};

const matheus = Object.create(personProto, {
    name: {value: 'matheus'},
    yearOfBirth: {value: 1999},
    job: {value: 'Developer'}
});

const camille = Object.create(personProto);
camille.name = 'Camille';
camille.yearOfBirth = 2001;
camille.job = 'Job';

console.log(camille.personProtos)
*/

//*************************************************
// Primitives vs Objects
//*************************************************

/*
//Variables
let a = 23;
let b = a;
a = 20;
console.log(a);
console.log(b);


//Objects 

var matheus = {
    name: 'Matheus',
    age: 20
};

matheus.age = 30;

console.log(matheus);

//Functions
let age = 25
let jane = {
    name: 'jane',
    city: 'São Paulo'
};

function change(a, b) {
    a = 30;
    b.city = 'Paris';
};

change(age, jane);

console.log(change);
console.log(age);
console.log(jane.city);
*/

//*************************************************
// Passing functions as arguments
//*************************************************

/*
const years = [1990, 1965, 1937, 2005, 1998, 1999, 2000, 2001, 2005];

function arrayCalc(arr, fn) {
  let arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2019 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) return Math.round(206.9 - 0.67 * el);
  else return -1;
}

const ages = arrayCalc(years, calculateAge);
const fullAge = arrayCalc(ages, isFullAge);
const rates = arrayCalc(ages, maxHeartRate);
console.log(ages, fullAge, rates);
*/

//*************************************************
// Passing functions returning functions
//*************************************************

/*
function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX desing is?');
    };
  } else if (job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name + '?');
    };
  } else {
    return function(name) {
      console.log('Hello, ' + name + ', what do you do?');
    };
  }
}

const teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Matheus');

const designerQuestion = interviewQuestion('designer');
designerQuestion('Jonh');
designerQuestion('Mariah');
designerQuestion('Mark');
designerQuestion('Mike');

const othersJobs = interviewQuestion('Police Man');
othersJobs('Jane');

interviewQuestion('teacher')('Mariah');

function isFullAge(age) {
  if (age >= 18 && age < 21) {
    return function(name) {
      console.log(name + ", you're almost an adult");
    };
  } else if (age >= 21 && age < 65) {
    return function(name) {
      console.log(name + ", you're an adult yuhoo you can drink now");
    };
  } else if (age >= 65) {
    return function(name) {
      console.log(name + ", you're overage please becareful with your heart");
    };
  } else {
    return function(name) {
      console.log(name + ", you're just a child");
    };
  }
}

isFullAge(18)('Matheus');
isFullAge(20)('Mariah');
isFullAge(21)('John');
isFullAge(66)('Joseph');
isFullAge(12)('Enzo');
*/

//*************************************************
// IIFE
//*************************************************

/*
function game() {
  let score = Math.round(Math.random * 10);
  console.log(score >= 5);
}
game();

(function(gooLuck) {
  let score = Math.round(Math.random * 10);
  console.log(score >= 500 - gooLuck);
})(5);

(function(name) {
  if (name.length === 5) {
    console.log('Hi, ' + name + ' your name has 5 letters');
  } else {
    console.log(
      'Hello, ' +
        name +
        " we can't count how much letters your name have, we're really sorry"
    );
  }
})('John');
*/

//*************************************************
// Closures
//*************************************************

/*
function retirement(retirementAge) {
  const a = ' years left until retirement';
  return function(yearOfBirth) {
    const age = 2019 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

const retirementUS = retirement(66);
retirementUS(1999);
const retirementGermany = retirement(65);
const retirementIceland = retirement(67);

retirementGermany(1999);
retirementIceland(1999);

/* re-write function with closures */
/*
function interviewQuestion(job) {
    if (job === 'designer') {
      return function(name) {
        console.log(name + ', can you please explain what UX desing is?');
      };
    } else if (job === 'teacher') {
      return function(name) {
        console.log('What subject do you teach, ' + name + '?');
      };
    } else {
      return function(name) {
        console.log('Hello, ' + name + ', what do you do?');
      };
    }
} 

function isFullAge(age) {
  if (age >= 18 && age < 21) {
    return function(name) {
      console.log(name + ", you're almost an adult");
    };
  } else if (age >= 21 && age < 65) {
    return function(name) {
      console.log(name + ", you're an adult yuhoo you can drink now");
    };
  } else if (age >= 65) {
    return function(name) {
      console.log(name + ", you're overage please becareful with your heart");
    };
  } else {
    return function(name) {
      console.log(name + ", you're just a child");
    };
  }
}
*/

/*

function isFullAge(age) {
  return function(name) {
    if (age >= 18 && age < 21) {
      console.log(name + ", you're almost an adult");
    } else if (age >= 21 && age < 65) {
      console.log(name + ", you're an adult yuhoo you can drink now");
    } else if (age >= 65) {
      console.log(name + ", you're overage please becareful with your heart");
    } else {
      console.log(name + ", you're just a child");
    }
  };
}

isFullAge(19)('Jorge');
isFullAge(15)('Mariah');
isFullAge(22)('John');

function interviewQuestion(job) {
  return function(name) {
    if (job === 'teacher') {
      console.log('What subject do you teach, ' + name + '?');
    } else if (job === 'designer') {
      console.log(name + ', can you please explain what UX desing is?');
    } else {
      console.log('Hello, ' + name + ', what do you do?');
    }
  };
}

interviewQuestion('teacher')('Matheus');
*/

//*************************************************
// Bind, call and apply
//*************************************************
/*
const matheus = {
  name: 'Matheus',
  age: 19,
  job: 'Developer',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old');
    } else if (style === 'friendly') {
      console.log('Hey! What\'s up? I\' ' + this.name + ' I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
    }
  }
};

const emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

matheus.presentation('formal', 'morning');
matheus.presentation.call(emily, 'friendly', 'evening');
matheus.presentation.apply(emily, ['friendly', 'afternoon']);

const matheusFriendly = matheus.presentation.bind(matheus, 'friendly');

matheusFriendly('morning');
matheusFriendly('night');
matheusFriendly('afternoon');

const emilyFormal = matheus.presentation.bind(emily, 'formal');

emilyFormal('morning');


const years = [1990, 1965, 1937, 2005, 1998, 1999, 2000, 2001, 2005];

function arrayCalc(arr, fn) {
  let arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2019 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

const ages = arrayCalc(years, calculateAge);
const fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/

//*************************************************
// Coding Challange 7
//*************************************************

(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
  
  Question.prototype.displayQuestions = function() {
    console.log(this.question);
  
    for(let i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i])
    }
  } 
  
  Question.prototype.checkAnswer = function(ans, callback) {
    
    let sc;
    
    if(ans === this.correct) {
      console.log('Correct Answer!');
      sc = callback(true);
    } else {
      console.log('Wrong answer, Try again :>');
      sc = callback(false);
    }
    this.displayScore(sc);
  }

  Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score + ' \n -----------------------------------------');
  }
  
  const q1 = new Question('Is javascript the coolest programming language in the world?', ['Yes', 'No'], 0);

  const q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michel', 'Jonas'], 2);

  const q3 = new Question('What does best describe coding?', ['Boring', 'Fun', 'Tedious'], 2);

  const q4 = new Question('What does Hypet text markup language means?', ['HTML', 'XML', 'Names', 'Markup', 'A programming Language', 'a \"Language\" of struture'], 5);

  const questions = [q1, q2, q3, q4];

  function score() {
    let sc = 0;
    return function (correct) {
      if(correct) {
        sc++;
      }
      return sc;
    }
  }

  const keepScore = score();
  
  function nextQuestion() {    

    const n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestions();

    const answer = prompt('Pleae select the correct answer.');

    if(answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }
  }
  nextQuestion();
})();

