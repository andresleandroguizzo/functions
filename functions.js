function square(num) {
	return num*num;
}

function even(num) {
	if ((num % 2) == 0) return true;
	else return false;
}

function factorial(num) {
	var x=1;
	for (i=0; i <num; i++){
		x = x * (num-i);
	}
	return x;
}

function mysterious() {
	return Math.random();
}

function maxim(num1, num2, num3, num4) {
	if (num1 > num2 && num1 > num3 && num1 > num4) return num1;
	else if (num2 > num3 && num2 > num4) return num2;
	else if (num3 > num4) return num3;
	else return num4;
}

var mesos=["gener", "febrer", "març", "abril", "maig", "juny", "juliol",
"agost", "setembre", "octubre", "novembre", "decembre"]
function mes(mesos) {
	console.log(mesos);
}

function crida() {
	return mes(mesos);
}
