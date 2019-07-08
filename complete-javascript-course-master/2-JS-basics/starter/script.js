/*******************************
*   Exercicio 1
*/
/* 
var massJohn, heightJohn, imcJohn, massMark, heightMark, imcMark, higherThan;
massJohn = prompt('Digite seu peso em KG');
heightJohn = prompt('Digite sua altura');
imcJohn = massJohn / (heightJohn * heightJohn);

massMark = prompt('Digite seu peso em KG');
heightMark = prompt('Digite sua altura');
imcMark = massMark / (heightMark * heightMark);

higherThan = imcMark > imcMark;

console.log('is Mark\'s BMI higher than John\'s? ' + higherThan);
*/

/**********************************
 * IF / ELSE statements 
 */
/*

 //Is John married?

 var firstName = 'John';
 var civilStatus = 'single';

 if(civilStatus === 'married') 
    console.log('He\'s married');
 else
    console.log('He\'sn\'t married yet');

 var massJohn, heightJohn, imcJohn, massMark, heightMark, imcMark, higherThan;
 massJohn = prompt('Digite seu peso em KG');
 heightJohn = prompt('Digite sua altura');
 imcJohn = massJohn / (heightJohn * heightJohn);

 massMark = prompt('Digite seu peso em KG');
 heightMark = prompt('Digite sua altura');
 imcMark = massMark / (heightMark * heightMark);

 if(imcMark > imcJohn)
    console.log('Mark\'s BMC is higher than Jhon\'s');
 else
    console.log('Mark\'s BMC isn\'t higher than Mark\'s');
*/

/********************
 * Boolean operators
 */

 /*
 var firstName = 'John';
 var age = 19;
 var _s = '\'';

 if(age <= 13){
    console.log(firstName + _s +'  a boy');
 }else if(age >= 13 && age < 20){
     console.log(firstName + _s +' a teenager');
 }else if(age >= 20 && age < 30){
     console.log(firstName + _s + ' a young man');
 }else{
     console.log(firstName + _s + ' a man');
 }
 */

 /***********************
  * Ternary operators and Switch statements
  */
 /*
  var age = 18;
  var drinks = age >= 18 ? 'beer' : 'juice';
  console.log(drinks);

  var firstName = 'John';
  var job = 'Designer';

  switch(job){
      case 'Teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    
      case 'Driver':
        console.log(firstName + ' drives an uber in São Paulo');
        break;
      case 'Designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
      default:
        console.log(firstName + ' does something else');
  }
  var massMolar = null;
  var relAr = null;

  switch(true){
      case massMolar >= 32 && relAr >= 1:
      case massMolar >= 32 && relAr < 1:
      case massMolar >= 32 && relAr === null:
      case massMolar === null && relAr >= 1:
        console.log('Ar mais pesado');
        break;
      case massMolar <= 32 && relAr <= 1:
      case massMolar <= 32 && relAr >= 1:
      case massMolar <= 32 && relAr === null:
      case massMolar === null && relAr <= 1:
        console.log('Ar mais leve');
        break;        
      case massMolar === null && relAr === null:
        console.log('verificar se os campos foram preenchidos');
        break;
      default: 
        console.log('verificar se os campos foram preenchidos');
  }
*/
/*****************
 * 
 * Challenge 2
 */

 /*
 var names = ['mary', 'mike', 'john'];
 var mikeAverage = (1116 + 94 + 123)/3;
 var johnAverage = (89 + 100 + 120)/3;
 var maryAverage = (97 + 134 + 105)/3 
 
 if(mikeAverage > johnAverage && mikeAverage > maryAverage){
     console.log(names[1] + ' is the winner');
 }else if(johnAverage > mikeAverage && johnAverage > maryAverage){
     console.log(names[2] + ' is the winner');
 }else{
     console.log(names[0] + ' is the winner');
 }
 */

/************
 * Functions
 */
//nós podemos passar vários argumentos na função basta separarmos por virgula
//Argumentos e parametros não são a mesma coisa
/*function calculateAge(birthYear){
    return 2019 - birthYear;
 }

 var ageMatheus = calculateAge(1999);
 var ageCamille = calculateAge(2001);
 var ageBruna = calculateAge(2003);
 console.log(ageMatheus, ageCamille, ageBruna);

 function yearsUntilRetirement(year, firstName){
   var age = calculateAge(year);
   var retirement = 65 - age;
   
   if(retirement > 0){
    console.log(firstName + ' retires in ' + retirement + ' years ');
   }else{
     console.log(firstName + ' is already retired');
   }

  }

 yearsUntilRetirement(1999, 'Matheus');
 yearsUntilRetirement(1900, 'Camille');
 yearsUntilRetirement(2003, 'Bruna');
*/

/*********************************************
 * Functions Statements and Expressions
 */
/*

 //Function declaration 
 //function whatDoYouDo(job, firstName){}

 //function statement


 //Function expression
 var whatDoYouDo = function(job, firstName){
    switch(job){
      case 'teacher':
        return firstName + ' teaches kids how to code';
      case 'driver':
        return firstName + ' drives an uber in Lisbon';
      case 'designer':
        return firstName + ' designs beautiful websites'
      default:
        return firstName + ' does something else';
    }
 }

 console.log(whatDoYouDo('teacher', 'John'));
 console.log(whatDoYouDo('driver', 'Maria'));
 console.log(whatDoYouDo('designer', 'José'));
 console.log(whatDoYouDo('retired', 'Carolina'));
*/

/***************************************
 * Arrays
 *

 //Initialize new Array
 var names = ['John', 'Mike', 'Jane'];
 var years = new Array(1990, 1992, 1992);

 console.log(names[1]);
 console.log(names.length);

 //Mutate array data

 names[1] = 'Ben';
 names[names.length] = 'Mary';
 names[9] = 'Rosé';
 console.log(names);

 // Different data types

 var john = ['John', 'Smith', 1990, 'designer'];

 //Adding new data in the final of the array

 john.push('Hello World');
 console.log(john);

 //Removing data of the final of the array

 john.pop();
 console.log(john);

 //Adding new data into the start of the array

 john.unshift('Hello it\'s me, Mario!');
 console.log(john);

 //Removing data of the start of the array

 john.shift();
 console.log(john);

 //Found where's locate the element in the array (indexOf).

 console.log(john.indexOf(1990));

 //When the element isn't in the array the indexOf should be -1

 console.log(john.indexOf('coragem'));

 //We can create expression with that 

 var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer IEEEE';
 console.log(isDesigner);

 */

 /******************************************
  * Coding Challange 3
  */
/*
  function tipCalculator(calculateTips){
     if(calculateTips <= 50){
       return calculateTips * (20/100);
     }else if(calculateTips > 50 && calculateTips <= 200){
       return calculateTips * (15/100);
     }else if(calculateTips > 200){
       return calculateTips * (10/100);
     }
  }
  var bills = [49, 124, 268];
  var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
  var finalValue = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
  console.log(tips, finalValue);
*/
/******************************************
 * Objects and properties
 */
/*
 //Object literal syntax
 var matheus = {
   firstName: 'Matheus',
   lastName: 'Viana',
   birthYear: 1999,
   job: 'Software developer',
   isMarried: false
 }
 console.log(matheus.firstName, matheus.birthYear);
 console.log(matheus); 

 matheus.job = 'FullStack Developer';
 matheus.isMarried = true;

 console.log(matheus);

 //new object syntax
 
 var camille = new Object();
 camille.firstName = 'Camille';
 camille.lastName = 'Viana';
 camille.job = 'Idiota';
 camille.isMarried = 'Não, ninguém quer ela kkkk';

 console.log(camille);
 console.log(camille['lastName']);
 var x = 'job';
 console.log(camille[x]);
*/
 /************************************
  * Objects and Methods
*/
/*
 
 var matheus = {
  firstName: 'Matheus',
  lastName: 'Viana',
  birthYear: 1999,
  job: 'Software developer',
  isMarried: false,
  //Functions into objects are methods
  calcAge: function(){
     this.age = 2019 - this.birthYear;
  }
};

matheus.calcAge();
console.log(matheus);
*/
/***********************************
 * CODING CHALLANGE 4
 */
/*

 var john = {
   firstName: 'John',
   lastName: 'Smith',
   birthYear: 1990,
   height: 1.70,
   mass: 60,
   calcBMI: function(){
     this.bmi = this.mass / (this.height*this.height);
     return this.bmi;
    }
 };
 var mike = {
   firstName: 'Mike',
   lastName: 'Joseph',
   birthYear: 1992,
   height: 1.60,
   mass: 10,
   calcBMI: function(){
     this.bmi = this.mass / (this.height * this.height);
     return this.bmi;
   }
 };

 if(john.calcBMI() > mike.calcBMI()){
   console.log(john.firstName + ' ' + john.lastName + ' ' + john.bmi);
 }else if(john.bmi < mike.bmi){
   console.log(mike.firstName + ' ' + mike.lastName + ' ' + mike.bmi);
 }else{
   console.log(john.firstName + '\'s BMI is like ' + mike.firstName + '\'s BMI, their BMI is: ' + john.bmi + ' ' + mike.bmi);
 }
*/
/******************************************
 * Loops and iteration
 */
/*
 console.log('For Loops');
 for(i = 0; i <= 100; i += 20){
   console.log(i);
 }

 // Working with arrays
 
 console.log('\nWorking with arrays and loops\n\n');
 var john = ['John', 'Smith', 1990, 'designer', false];
 for(i = 0; i <= john.length; i++){
   console.log(john[i]);
 }

 // Working with while loop

 console.log('\nWorking with while loops\n\n')
 var i = 0;
 while(i < john.length){
  console.log(john[i]);
  i++;
 }

 // Continue and continue statements

 console.log('\nWorking with continue statements\n\n');
 var john = ['John', 'Smith', 1990, 'designer', false];
 for(i = 0; i <= john.length; i++){
   if(typeof john[i] !==  'string')
    continue;
   console.log(john[i]);
 }

 // Continue and break statements
 console.log('\nWorking with break statements\n\n');
 var john = ['John', 'Smith', 1990, 'designer', false];
 for(i = 0; i <= john.length; i++){
   if(typeof john[i] !==  'string')
    break;
   console.log(john[i]);
 }

 // Challenge Looping John array another way around

 console.log('\nChallenge Looping John array another way around\n\n');
 var john = ['John', 'Smith', 1990, 'designer', false];
 for(i = john.length - 1; i >= 0; i--){
   console.log(john[i]);
 }
*/


/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip).
HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, 
and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips.
 HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). 
 After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/
/*

 var john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],  
  calcTips: function(){
    this.tips = [];
    this.finalValue = [];

    for(var i = 0; i < this.bills.length; i++){
      var bill = this.bills[i];
      var percentage;

      //Determine percetange based on tipping rules

      if(bill < 50){
        percentage = .2;
      }else if(bill >= 50 && bill < 200){
        percentage = .15;
      }else{
        percentage = .1;
      }

      //Add the values at the corresponding arrays

      this.tips[i] = bill * percentage;
      this.finalValue[i] = bill + bill * percentage;
    }    
  }  
 }
 var mike = {
   fullName: 'Mike Miller',
   bills: [77, 375, 110, 45],
   calcTips: function(){
     this.tips = [];
     this.finalValue = [];
     for(var i = 0; i < this.bills.length; i++){
       var percentagee;
       var bill = this.bills[i];
       if(bill < 100){
         percentagee = .2;
       }else if(bill >= 100 && bill < 300){
         percentagee = .1;
       }else{
         percentagee = .25;
       }
       this.tips[i] = bill * percentagee;
       this.finalValue[i] = bill + bill * percentagee;
     }
   }
 }
 function calcAverage(tips){
  var sum = 0;
  for(var i = 0; i < tips.length; i++){
    sum = sum + tips[i];
    //[2, 6, 4] --> 0/ 2/ 8/ 12/ 
  }
  return sum / tips.length;
 }

 john.calcTips();
 mike.calcTips();

 john.average = calcAverage(john.tips);
 mike.average = calcAverage(mike.tips);
 console.log(john, mike);

 if(john.average > mike.average){
   console.log(john.fullName + '\'s family pays higher tips, with average of $' + john.average);
 }else{
  console.log(mike.fullName + '\'s family pays higher tips, with average of $' + mike.average);
 }
*/