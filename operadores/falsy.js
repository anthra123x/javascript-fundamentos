// short-ciruit

//falso
//false
//0
//''
//null
//undefined
//NaN

let nombre = 'camilo';
let username = nombre || 'usuario'; // si nombre es falso, asigna 'usuario'
console.log(username);

function fn1(){
    console.log(' soy fn1');
    return true;
}

function fn2(){
    console.log(' soy fn2');
    return false;
}

let resultado = fn1() && fn2();