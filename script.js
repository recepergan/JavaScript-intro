//Tür Dönüşümü

// let num1 = '5';
// let num2 = '5';


// let num1 = Number('5');
// let num2 = Number('15');
// console.log(num1+num2);
// console.log(typeof num1);

let val;
//number to String
val = String(10);

val = String(true);

//date to string
val = String(new Date().getFullYear());

//array to string
val = String([1,2,3,4]);

//toString()
val = (false).toString();

//string to number
val = Number('10');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('a');
val = Number([1,2,3,4]);

//parseInt
//parseFloat

val = parseInt('10');
val = parseInt('10.5');
val = parseFloat('10.5');



console.log(val);
 console.log(typeof val);
 console.log(val.toFixed(3));


