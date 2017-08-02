<html>
<body>
<script type="text/javascript">

//Program name: weeklyForecast.html
//Purpose: To calculate and display weekly temperature. A for loop to enter student numbers.
//Author: Deidre Mensah
//Date last modified: 03/16/2017

//Declares variables
var totalTemperature;				//total temperature
var more;					//more numbers to add
var average;					//average weekly temperature

//Declares constants
var BR = "<br />";				//HTML line break
var PA = "<p />";				//HTML paragraph break
var ES = "";					//empty string

//Program heading
document.write("Welcome to your Weekly Forecast guide!" + PA);

//For loop to obtain temperatures for 7 day week.
do {
	num1 = prompt("Enter the temperature on Day 1 in degrees Fahrenheit:", ES);
	num1 = parseInt(num1);
	num2 = prompt("Enter the temperature on Day 2 in degrees Fahrenheit:", ES);
	num2 = parseInt(num2);
	num3 = prompt("Enter the temperature on Day 3 in degrees Fahrenheit:", ES);
	num3 = parseInt(num3);
	num4 = prompt("Enter the temperature on Day 4 in degrees Fahrenheit:", ES);
	num4 = parseInt(num4);
	num5 = prompt("Enter the temperature on Day 5 in degrees Fahrenheit:", ES);
	num5 = parseInt(num5);
	num6 = prompt("Enter the temperature on Day 6 in degrees Fahrenheit:", ES);
	num6 = parseInt(num6);
	num7 = prompt("Enter the temperature on Day 7 in degrees Fahrenheit:", ES);
	num7 = parseInt(num7);

	//Add numbers and calculates average
	totalTemperature = num1 + num2 + num3 + num4 + num5 + num6 + num7;
	average = totalTemperature/7;
	average = average.toFixed(2);
	
	//Asks to continue or end loop
	more = prompt("Do you have any more numbers to add? Enter Y/N");
} while (more == "Y");

//Displays average weekly temperature
document.write("Your weekly average temperature in degrees Fahrenheit: " + average + PA);

//Displays message based on inputs
if (average < 0) {
	document.write("Super cold! I wouldn't go out at all." + PA);
}
else if ((average >= 0) && (average <= 32)) {
	document.write("Cold, but you can manage." + PA);
}
else if ((average >= 32) && (average <= 59)) {
	document.write("A jacket should suffice, still chilly!" + PA);
}
else if ((average >= 60) && (average <= 80)) {
	document.write("It's a nice day to read a book outside! It's a warm day ahead of you!" + PA);
}
else if ((average >= 81) && (average <= 95)) {
	document.write("Very warm! Go for a swim!" + PA);
}
else if (average > 95) {
	document.write("Super hot! Try to stay in areas with AC." + PA);
}

//Thank the user and end the program
document.write("Thank you!" + BR);

</script>
</body>
</html>