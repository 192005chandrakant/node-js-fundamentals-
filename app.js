const calculator =require('./calculator');
//this require method is used to import anything

// note: All the individual js files are modules in node js
//all the variables created inside any module has a scope of file only


// console.log("I am trying to code ");
// function mulnum(num) {
//     let a=3;
//     let b=3;
//     console.log(num);
//     return a*b*num;
// };
// let mul = mulnum(3);
// console.log(mul);
// console.log(global);

//In node js we have an global object in place of window object 
calculator.addition(3,2) ;
calculator.substraction(3,2) ;
calculator.multiplication(3,2) ;
calculator.modulus(3,2) ;
calculator.division(3,2) ;








