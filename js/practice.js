

// problem----1 /////

const multiply = (x, y, z) => x * y * z;

const result = multiply(12, 2, 3);
// console.log(result);

const multi = (num1, num2, num3) => num1 * num2 * num3;

const value = multi(2, 3, 5);
// console.log(value);

////practice problem - 2   ////

const multiLine = `i am a web developer.
i love to code.
i love to biryani`;
// console.log(multiLine);

///problem--3 ////

const defaultPara = (x, y = 2, z = 3) => x + y + z;

const result1 = defaultPara(10);
//   console.log(result1);

////problem---4 //////

const friends = ['jahid', 'rayhan', 'rupo', 'rifat', 'ataf', "rabbi", 'noyon'];



const evenLengthName = friends.filter(names => names.length % 2 === 0);
//   console.log(evenLengthName);


//////problem -5 /////
const averageNumber = (numbers) => {
  let totalSumOfNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const square = number * number;
    const totalSum = totalSumOfNumber + square;
    return totalSum / numbers.length;
  }

};

const numbers = [2, 1]
const FinalResult = averageNumber(numbers);
// console.log(FinalResult);


////another way////
const array1 = [2, 1];

const initialValue = 0;
const sumWithInitial = array1.reduce((previous, currentValue) => previous + currentValue * currentValue,
  initialValue);

  // console.log(sumWithInitial);


  // another way  ///
   let sum =0 ;
   const square = ar =>{
    for (const el of ar){
   sum =sum + el *el ;
    }
    return sum /ar.length;
    
   }
    const numbers1 = [2,1];
    // console.log(square(numbers1));

    ////problem -6 /////


    const num = [2,3,4,5,6,45,34,76,87888888,23,67,56];
    const num1 =[45,23,67,34,87,56,45,977777,23];
     const maximumNumber = (num,num1) => {
      const num2 = [...num, ...num1];
      const result =Math.max(...num2);
      return result;
    
    }
    const totalMax = maximumNumber(num,num1);
    console.log(totalMax);


    const num4 = [2,56,45,78,98,2367,89,];
    const num5 =[45,67,34,67,34,67,988,34,56,];

    const maxNumber2 = (x,y) =>{
      const num7 = [...num4,...num5];
      const num6 =Math.max(...num7);
      return num6 ;
    }

    const maxxxx =maxNumber2(num4,num5);
    console.log(maxxxx);

    