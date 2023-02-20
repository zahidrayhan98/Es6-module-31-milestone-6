 const max = Math.max(12,24,67,777,34,78);
//  console.log(max);

const numbers = [23,45,12,67,23,45,778,];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

// const number2 = [...numbers];
// numbers.push(35);
// number2.push(34);

// console.log(numbers);
// console.log(number2);

// const number3 =[23,34, ...numbers,34,56];
// console.log(number3);


const {age,name,phone} ={name:"rupo",age:23,phone:"01622626520"};
// console.log(phone);


///// array derstruction////
const [first,another] = [23,45,34,34,];
// console.log(first,another);

const fullName = ['jahid', "rayhan", "rupo"];
const [fourth,second,third] = fullName ;
console.log(second);