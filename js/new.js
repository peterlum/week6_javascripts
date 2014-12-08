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
 if (num > 90) {
        return 'A';
    } else if (num > 80) {
        return 'B';
    } else if (num > 70) {
        return 'C';
    } else if (num > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log('You got a ' + assignGrade(95));
console.log('You got a ' + assignGrade(65));


function pluralizer(noun, number){
    if (number != 1 && noun != 'sheep' && noun != 'geese'){
        return number + ' ' + noun + 's';
    } else {
        return number + ' ' + noun;
    }
}
console.log('I have ' + pluralizer('dog', 0));
console.log('I have ' + pluralizer('dog', 1));
console.log('I have ' + pluralizer('dog', 2));


*/



//The Calculator//

function squareNumber(number){
    var result = number*number;
    console.log( "The result of squaring the number " + number + " is " + result + "." );
    return result;
}

function halfNumber(number){
    var result = number/2 ;
    console.log( "Half of " + number + " is " + result + ".");
    return result;
}

function percentOf(number1, number2){
    var percentage = number1/number2 * 100 + "%" ; 
    console.log(number1 + " is " + percentage + " of " + number2 + ".");
    return percentage;
}

function areaOfCircle(radius){
    var circleArea = Math.PI*radius*radius;
    var roundedArea = Math.round(circleArea*100)/100;
    console.log("The area of a circle with radius " + radius + " is " + circleArea + "." );
    return roundedArea;
}

function mathematical(number){
    var halved = halfNumber(number);
    var halvedSquared = squareNumber(halved);
    var areaOfHalvedSquared = areaOfCircle(halvedSquared);
    var squaredCircle = squareNumber(areaOfHalvedSquared);
    var percentOfCircle = percentOf(halvedSquared,areaOfHalvedSquared);
    return percentOfCircle;
}

mathematical(4);