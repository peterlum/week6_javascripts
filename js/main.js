//alert('Hello World');


function lifetimeSupply(amountPerDay, years){;
	return amountPerDay*365*years;
}

/*var number = prompt('Enter a number:');
alert('Your number was'+number);
function tellFortune(jobTitle, location, name, numChildren){
console.log('You will be a ' + jobTitle + ' in ' + location + ' and married to ' + name + ' with '+ numChildren + ' kids.');
return ('You will be a ' + jobTitle + ' in ' + location + ' and married to ' + name + ' with '+ numChildren + ' kids.');
}

tellFortune('rapper', 'New York', 'beyonce', 1 );
tellFortune('basketball player', 'New York', 'LaLa',3 );
tellFortune('maniac','Chicago','Kim',1);

function calculateAge(num1, num2){
   var beforeBirthday = num2-num1 -1;
   var afterBirthday = num2-num1;
    console.log('You are either ' + beforeBirthday + ' or ' + afterBirthday + ' .');
    return('You are either ' + beforeBirthday + ' or ' + afterBirthday + ' .');
}

calculateAge(1989, 2014);
calculateAge(1990, 2014);

function calculateSupply(num1, num2){
    var maxAge=100;
    var lifetime=maxAge-num1;
    var lifetimeSupply=lifetime*365*num2;
    console.log('You will need ' + lifetimeSupply + ' snacks to last you until the ripe old age of ' + maxAge + '.');
    return('You will need ' + lifetimeSupply + ' snacks to last you until the ripe old age of ' + maxAge + '.');
}

calculateSupply(25, 2);

calculateSupply(22, 4);

calculateSupply(18, 10);


function calcCircumference(num){
    var radius=num;
    var circleCircumference=2*Math.PI*radius;
    console.log('The circumference is ' + circleCircumference + '.');
    return('The circumference is ' + circleCircumference + '.');
}

function calcArea(num){
    var radius=num;
    var areaCircle=Math.PI*radius*radius;
    console.log('The area is ' + areaCircle + '.');
    return('The area is ' + areaCircle + '.');
}

calcCircumference(2);
calcArea(3);

function celsiusToFahrenheit(num){
    var celsius=num;
    var toFahrenheit=celsius*9/5+32;
    console.log( celsius + "°C is " + toFahrenheit + "°F." );
}

function fahrenheitToCelsius(num){
    var fahrenheit=num;
    var toCelsius=(fahrenheit-32)*5/9;
    console.log( fahrenheit + "°F is " + toCelsius + "°C." );
}

celsiusToFahrenheit(20);
fahrenheitToCelsius(68);


*/

function lifetimeSupplyPrompts(){

var snack = prompt('What is your favorite snack?');
var numPerDay = prompt('How many ' + snack + ' do you eat per day?');
var years=100;

alert('You will eat ' + lifetimeSupply(numPerDay,years) + ' ' + snack + 's over ' + years +'.');
}


function calculateAgePrompts(){
	var birthYear = prompt('What is your birth year?');
	var thisYear = prompt('What is this year?');

	alert('You are either ' + (thisYear-birthYear-1) + ' or ' + (thisYear-birthYear) + '.' );
}

/* In Class Exercises 

function greatNum(num1, num2){
if (num1>num2){
    console.log(num1 + ' is greater.');
} else {
    console.log(num2 + ' is the greater number.');
}}

greatNum(1,2);
greatNum(3,2);



function helloWorld(lang){
    if(lang =='es'){
        return"Hola Mundo";
    }else if (lang =='en') {
        return "Hello World";
    }else if (lang == 'jp'){
        return "Sekai Konnichiwa";
    }
}

console.log(helloWorld('es'));
console.log(helloWorld('en'));
console.log(helloWorld('jp'));

function assignGrade(num){
    if(num>90 && num>80){
        return "A"
    } else if(90>num && num>80){
        return "B"
    }
}
*/