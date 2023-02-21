 
 const add = (first, second) => first + second ;
const multiply = (a ,b) => a * b ;
   
  const result = multiply(2,3);
//   console.log(result);

////no parameter///
const pie =() => 3.14;

//// one parameter///
const one =(num1)=> num1 *5 ;



////multi line arrow function;;;
//// if get a value return use return ///
const multi =(x,y,z)=> {
    const add = x + y ;
    const  add1 = y + x ;
    const multiply = add1 * add ;
    const total = multiply /2 ;
    return total ;
}

