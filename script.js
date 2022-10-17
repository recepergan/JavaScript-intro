//operatörler

let val;
const a = 10;
const b = 5;
let c = 3;


//1- Aritmetik O.
val = a+ b;
val = a - b;
val = a * b;
val = a / b;
val = a%b;
// val = c++;
// val = ++c;
val = --c;
val = c--;
console.log(val);

//2-Atama operatörleri

val = a;
console.log(val);
val +=a; //val = val + a;
console.log(val);
val -=a; //val = val - a;

console.log('-------');
//3-Karsılaştırma operatörleri

val = a==b
val = b==c
val = b===c; //değer kontrolü & type
val = 5 ==='5';
val = a!=b;
val = a > b
val = b > a

//4- mantıksal operatörler

//&&(and)

val = (a>b) && (a>c)
//||or)
// ! (not)




console.log(val);
console.log(typeof val);
