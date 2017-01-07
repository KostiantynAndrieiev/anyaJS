/*		ОПЕРАТОРЫ В JS
	1 Присвоение =
	2 Приравнивание ==
	3 Не равно !=
	4 Лог. операторы:
		4.1 ИЛИ ||
		4.2 И &&
	5 Арифметические операторы: +, -, *, /, %
	6 Отрицания !
	7 УНАРНЫЕ ОПЕРАТОРЫ:
		7.1 Бинарное И &
		7.2 Бинарное ИЛИ |
		7.3 Инверсия ~
*/

/*
	if-else if ... else

	if (statement 0) {
		some actions...
	} else if (statemnt 1) {
		some actions...
	} else {
		some actions...
	}
*/


/*  EXAMPLE 1
	var pi = 3.14156;

	var radius1 = 5;
	var radius2 = 18;

	var s1 = pi * radius1 * radius1;
	var s2 = pi * radius2 * radius2;

	var ringArea = s2 - s1;

	alert("The area of a ring is: " + ringArea + "!");
*/

/*
	Here we only declare and define a function!!! IT"S NOT GOING TO WORK
	WITHOUT CALLING IT!!!
*/

document.getElementById('block').innerHTML = 'Hello from script!';

var arr = new Array();

for(i = 0; i < 20; i++){
	arr[i] = 2 * i / 4;
	document.write(arr[i] + '<br/>');
}
