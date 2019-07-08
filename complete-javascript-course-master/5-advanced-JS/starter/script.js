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

const years = [1999, 1976, 2001, 2003];

function arrayCalc(arr, fn) {
    const arrRes = [];
    for (i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    };
    return arrRes;
};

function calcAge(el) {
    return 2019 - el;
};

function fullAge(el) {
    return el >= 18;
};

function maxHeartRates(el) {
    if (el >= 18){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1
    }
};

const ages = arrayCalc(years, calcAge);
const isFullAge = arrayCalc(ages, fullAge);
const rates = arrayCalc(ages, maxHeartRates);
console.log(ages);
console.log(isFullAge);
console.log(rates);






