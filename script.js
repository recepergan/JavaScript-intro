//Date object

let d = new Date();
let birthday = new Date(1990,1,5);

//Set Methods
d.setFullYear(2020);
d.getDay();
d.setHours(10);

//Get Methods

console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getHours());
console.log(d);
console.log(typeof d);

console.log(d.getFullYear()-birthday.getFullYear());


