alert('Hello World');

function lifetimeSupply(amountPerDay, years){;
	return amountPerDay*365*years;
}

var number = prompt('Enter a number:');
alert('Your number was'+number);

var snack = prompt('What is yoru favorite snack?');
var numPerDay = prompt('How many ' + snack + ' do you eat per day?');
var years=100;

alert('You will eat' + lifetimeSupply(numPerDay,years) + ' ' + snack + 's over' + years +'.');
