// 1 First get all the variables that we need  
let screen = document.getElementById("input");
let allButtons = document.querySelectorAll(".numbers div");
let clearButton = document.getElementById("clear");
let result = document.getElementById("result");
let expression = "";

// 2 Second take all the buttons value and put that into .input when that button is clicked  
    allButtons.forEach(function(button){
        button.addEventListener("click",function(e){
            expression += button.innerHTML;
            screen.innerText = expression;
        });
    });

// 3 Third add clear function to C
    clearButton.addEventListener("click",function(){
        screen.innerText = "";
        expression = "";
    });

// 4 Fourth make = Result working and evaluate expressions
    result.addEventListener("click",function(){
        try {
            let totalResult = eval(expression)
            screen.innerText = totalResult;
        } catch (error) {
            screen.innerText = "Error";
            expression = "";
        }
    });