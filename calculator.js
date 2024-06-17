function add(a,b){
    let sum=a+b;
    console.log(sum );
}
function sub(a,b){
    let sub=a-b;
    console.log(sub);
}

function mul(a,b){
    let mul=a*b;
    console.log(mul );
}

function mod(a,b){
    let mod=a%b;
    console.log(mod );
}
function div(a,b){
    let div=a/b;
    console.log(div );
}


module.exports ={
    addition : add,
    substraction:sub,
    multiplication:mul,
    modulus:mod,
    division:div
}