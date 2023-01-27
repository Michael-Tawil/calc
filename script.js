const display = document.querySelector(".conitem.Display");
const Clear = document.querySelector(".conitem.Clear");
const delet = document.querySelector(".conitem.Delete");
const operattr = document.querySelectorAll(".conitem.operator");
const numberpad = document.querySelectorAll(".conitem.number");
const eq = document.querySelector(".conitem.equals");
let operator ="";
let Num1 = "";
let Num2 = "";

function addition(Num1,Num2){

    return Num1 + Num2;
}

function subtraction(Num1,Num2){

    return Num1 - Num2;
}

function division (Num1,Num2){

    return Num1 / Num2;
}

function Multiply(Num1,Num2){

    return Num1 * Num2;
}

function operate(){
    Num2 = Number(Num2);
    Num1 = Number(Num1);
    if (operator === "+" ){
        display.innerHTML = addition(Num1,Num2);
        Num2 = "";
        Num1 = "";
        operator ="";

    }else if(operator === "-"){
        display.innerHTML = subtraction(Num1,Num2);
        Num2 = "";
        Num1 = "";
        operator ="";

    }else if (operator === "/"){
        display.innerHTML = division(Num1,Num2);
        Num2 = "";
        Num1 = "";
        operator ="";

    }else if (operator === "x"){
        display.innerHTML =  Multiply(Num1,Num2);
        Num2 = "";
        Num1 = "";
        operator ="";
    }else{
        console.log("error");
    }

}

function displayNums(){
    display.innerHTML = `${Num1} ${operator} ${Num2}`;
}

function updatenum(e){
    Num2 += e.target.textContent;
    displayNums();

}

function updateop(op){
    operator = op;
    console.log(operator);
    Num1 =  Num2;
    Num2 = "";
    displayNums();

}

numberpad.forEach((number) => number.addEventListener("click",updatenum));
operattr.forEach((op) => op.addEventListener("click",(e)=> {updateop(e.target.textContent);}))
eq.addEventListener("click",operate);