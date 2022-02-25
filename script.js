// const screen = document.querySelector(".output");

// // const allButtons = document.querySelector(".calculator-grid");

// let filterNumber = "0";

// let sumTotal = 0;

// let previousOperator = null;

// const allButtonsClick = (value) => {
//   if (!isNaN(parseInt(value))) {
//     handleNumber(value);
//   } else {
//     handleSymbol(value);
//   }

//   renderToScreen();
// };

// const handleNumber = (value) => {
//   if (filterNumber === "0") {
//     filterNumber = value;
//   } else {
//     filterNumber += value;
//   }
// };

// function handleMath(value){
//     if(filterNumber === "0"){
//         return
//     }


// const intBuffer = parseInt(filterNumber);
// if(sumTotal === 0) {
//     sumTotal = intBuffer
// }else{
//     flushOperation(intBuffer)
// }
// previousOperator = value

// filterNumber = "0"

// }
// function flushOperation(intBuffer) {
//     if (previousOperator === "+") {
//         sumTotal += intBuffer;
//       } else if (previousOperator === "✕") {
//         sumTotal *= intBuffer;
//       } else if (previousOperator === "−") {
//         sumTotal -= intBuffer;
//       } else {
//         sumTotal /= intBuffer;
//       }
// }


// const handleSymbol = (value) => {
//   switch (value) {
//     case "AC":
//       filterNumber = "0";
//       sumTotal = 0;
//       break;
//     case "DEL":
//       if (filterNumber === 1) {
//         filterNumber = "0";
//       } else {
//         filterNumber = filterNumber.substring(0, filterNumber.length - 1);
//       }
//       break;
//     case ".":
//         filterNumber += value
//       break
//     case "=":
//       if (previousOperator === null) {
//         return;
//       }
//       filterNumber = +sumTotal;
//       previousOperator = null;
//       flushOperation(parseInt(filterNumber))
//       break
//       case "+":
//       case "−":
//       case "÷":
//       case "✕":
//         handleMath(value)
//         break;
//   }
  
// };


// const renderToScreen = () => {
//   screen.innerText = filterNumber;
// };

// function general(){
// document.querySelector(".calculator-grid").addEventListener("click", (event) => {
//   allButtonsClick(event.target.innerText);
// });
// }

// general()




// // This make it possible all the calculations
// let runningTotal = 0;

// // This keeps in track of what users type in...
// let buffer = "0";
// let previousOperator;
// const screens = document.querySelector(".output");

// function buttonClick(value) {
//   if (isNaN(parseInt(value))) {
//     handleSymbol(value);
//   } else {
//     handleNumber(value);
//   }
//   rerender();
// }

// function handleNumber(value) {
//   if (buffer === "0") {
//     buffer = value;
//   } else {
//     buffer += value;
//   }
// }

// function handleMath(value) {
//   if (buffer === "0") {
//     // do nothing
//     return;
//   }

//   const intBuffer = parseInt(buffer);
//   if (runningTotal === 0) {
//     runningTotal = intBuffer;
//   } else {
//     flushOperation(intBuffer);
//   }

//   previousOperator = value;

//   buffer = "0";
// }

// function flushOperation(intBuffer) {
//   if (previousOperator === "+") {
//     runningTotal += intBuffer;
//   } else if (previousOperator === "−") {
//     runningTotal -= intBuffer;
//   } else if (previousOperator === "✕") {
//     runningTotal *= intBuffer;
//   } else {
//     runningTotal /= intBuffer;
//   }
// }

// function handleSymbol(value) {
//   switch (value) {
//     case "C":
//       buffer = "0";
//       runningTotal = 0;
//       break;
//     case "=":
//       if (previousOperator === null) {
//         // need two numbers to do math
//         return;
//       }
//       flushOperation(parseInt(buffer));
//       previousOperator = null;
//       buffer = +runningTotal;
//       runningTotal = 0;
//       break;
//     case "←":
//       if (buffer.length === 1) {
//         buffer = "0";
//       } else {
//         buffer = buffer.substring(0, buffer.length - 1);
//       }
//       break;
//     case "+":
//     case "−":
//     case "✕":
//     case "÷":
//       handleMath(value);
//       break;
//   }
// }

// function rerender() {
//   screens.innerText = buffer;
// }

// function init() {
//   document.querySelector(".calculator-grid").addEventListener("click", function(event) {
//     buttonClick(event.target.innerText);
//   });
// }

// init();









// This make it possible for seeing what is typed in
let filterNumber = "0"


// This is summing total
let sunTotal = 0

// This is storing what is pressed before pressing any arithmetic operator
let lastOperation = null

const screen = document.querySelector('.output')


// This function is handling the click of all button
function allButtons(value) {
    if(isNaN(parseInt(value))){
        handleSymbol(value)
    }else{
        handleNumber(value)
    }
    // This fxn is rendering everything typed to the screen
    renderText()
}


// This is handling the press of numbers
function handleNumber(value){
    if(filterNumber === "0"){
        filterNumber = value
    }else{
        filterNumber += value
    }
}


// This is handling the whole symbols
function handleSymbol(value) {
    switch(value) {
        case "AC":
            filterNumber = "0"
            sunTotal = 0
        break;
        case "DEL":
            if(filterNumber.length === 1){
                filterNumber = "0"
            }else{
                filterNumber = filterNumber.substring(0, filterNumber.length - 1)
            }
            break
        case ".":
            filterNumber += value
            //  handleOperators(parseInt(filterNumber))
            //  sunTotal +=  parseFloat(filterNumber)
            //  lastOperation = null
            // handleMath(value)
            break
        case "=":
            if(lastOperation === null){
                return
            }
            handleOperators(parseInt(filterNumber))
            lastOperation = null
            filterNumber = +sunTotal
            sunTotal = 0;
            break;
        case "+":
        case "÷":
        case "✕":
        case "−":
         handleMath(value);
         break
    }
}


// All the Calculations are been perform here
function handleMath(value) {
    if(filterNumber == "0"){
        return 
    }

    const storeFilterNumber = parseInt(filterNumber)
    if(sunTotal === 0){
        sunTotal = storeFilterNumber
    }else{
        handleOperators(storeFilterNumber)
    }
    lastOperation = value

    filterNumber = "0"
}

    function handleOperators(storeFilterNumber){
        if(lastOperation === "+") {
            sunTotal += storeFilterNumber
        }else if(lastOperation === "✕") {
            sunTotal *= storeFilterNumber
        }else if(lastOperation === "−"){
            sunTotal -= storeFilterNumber
        }else{
            sunTotal /= storeFilterNumber
        }
    }


function renderText(){
    screen.innerText =  filterNumber
}

function general() {
    document.querySelector(".calculator-grid").addEventListener("click", function(event){
       allButtons(event.target.innerText)
    })
}


general();