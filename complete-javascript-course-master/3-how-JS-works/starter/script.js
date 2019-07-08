///////////////////////////////////////
// Lecture: Hoisting

//Functions
calcYear(1999);
function calcYear(year){
    console.log(2019 - year);
}
/*
//nessa parte o hoisting não irá funcionar pq não é uma função
//o erro retornado é o TypeError: retirement is not a function
retirement();
var retirement = function(){
    console.log(65 - (2019 - 1999))
}
*/

//Variables

/*
    //essa linha retorna um erro RefeceError: age isn't defined
    console.log(age);
*/
/*
//No primerio console.log ele irá retornar undefined porque ao contrário das funções o hoisting não funciona com variaveis e ele não consegue encontrar o valor da mesma
console.log(age);
var age = 20;
console.log(age);

function retirementAge(){
    var age = 65;
    console.log(age);
}
retirementAge(); // aqui o console irá mostrar 65 que é a variavel que não está no escopo global e sim apenas na função
console.log(age); // nesse ele mostrara os 20 que é variavel no escopo global.
*/


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
/*
//Esse console.log retornará o objeto window o qual mostra o local da janela
console.log(this);
*/
/*
calcAge(1999)
function calcAge(year){
    console.log(2018 - year);
    console.log(this);
}*/


/*
var john = {
    name: 'John',
    yearOfBirth: 1999,
    calcAge: function(){
        console.log(this);
        console.log(2018 - this.yearOfBirth);
        /*
        function innerFunction(){
            console.log(this);
        }
        innerFunction();
        
    }
};
john.calcAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1998
};

mike.calcAge = john.calcAge;
mike.calcAge();
*/




