////// function declaration /////

function add (first , second){
    const total =first + second ;
    return total ;
}

/////function expression////

const add1 = function add1 (first, second){
    const total = first + second ;
    return  total ;
}
///// function expression with anonymous////

    const add2 = function  (first, second){
    const total = first + second ;
    return  total ;
}
    const add3 = function  (first, second){
    
    return  first + second;
}
    ////// Arrow Function call ////
    const add4 =  (first, second) => first +second ;
  
    const result = add2 (10,34);
    console.log(result);

