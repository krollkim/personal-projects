
function key(x){
//     let val = 1;

// document.getElementById("calculator__display").innerHTML = val;

// let val = 1;
// if(val == 1)
// document.getElementById("calculator__display").innerHTML = val;

// let val = document.getElementById("num1") = 1;
// let num1 =val;

// if(num1 == val){
// document.getElementById("calculator__display").innerHTML = val;
// }

// const calculator = document.getElementById(".calculator__display"))
// const keys = calculator.getElementById(".calculator__keys")

// keys.addEventListener(‘click’, e => {
//  if (e.target.matches(‘button’)) {
//    // Do something
//  }
// })
const display = document.getElementById("calculator__display");
display.innerHTML += x;
}


function calc(){
    const dis = document.getElementById("calculator__display");
    const res = eval(dis.innerHTML);
    dis.innerHTML += " = " + res;

}

function clean(){
    let dis1 = document.getElementById("calculator__display");
    dis1.innerHTML = "";
}

