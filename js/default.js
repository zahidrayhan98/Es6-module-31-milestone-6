
// function add (num1,num2){
//     num2 = num2 || 10
//     // if (num2 === undefined){
//     //     num2 = 30 ;
//     // }
//     const total = num1 + num2 ;
   
//     return total ;
// }
// const cal = add(10);
// console.log(cal);

///// default parameter ///

 function add (num1 ,num2=23){
    const total = num1 + num2 ;
    return total ;
 }
  const cal = add (10);
  console.log(cal);


   function fullname(first ,second= 'rayhan'){
    const name = first + ' ' + second;
    return name;
   }
   const names = fullname('jahid');
   console.log(names);
