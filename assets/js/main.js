// variables
let numbers = [];
let operator;
//let exp; // *
let results = 0;
let display = document.getElementById('displayResult');
let dispExp;
let dispArray = [];

function clearCalc() {
    numbers = [];
    operator = null;
    //exp = null;
    results = 0;
    display.value = 0;
    dispExp = null;
    dispArray = [];

    //logs
    //console.log('clear logs');
    //console.log(numbers);
    //console.log(operator);
    //console.log(exp);
    //console.log(results);
    //console.log(display.value);
}

function deleteNum() {
    //numbers.pop()
    //console.log(numbers);

    dispArray.pop();
    //console.log(dispArray);
    // update dispExp after Del
    dispExp = dispArray.join('');
    display.value = dispExp;
    //console.log(display.value);

}

function chooseOperation(operation) {
    operator = operation;
    //console.log(operator);
    //numbers.push(operator);
    //console.log(numbers);
    dispArray.push(operator);
    //console.log(dispArray);// [1, '+', 2]
    dispExp = dispArray.join('');//.toString(); // 1+2
    //console.log(dispExp);

    display.value = dispExp;
}

function appendNumber(number) {
    numbers.push(parseInt(number));
    //console.log(numbers);
    // 1 + 1 => [1,1]
    dispArray.push(+number);
    //console.log(dispArray);
    dispExp = dispArray.join('');//.toString();
    //console.log(dispExp);

    display.value = dispExp;

}

function compute() {
    // take numbers & operators from dispArray 
    // user selected operators
    // evaluate 
    // store results in results variable
    // update dispExp expression on the display

    // if (operator) {
    //     exp = numbers.join(operator); // [1, 2, 1] => 1-2-1
    //     //console.log(operator);
    //     console.log(exp);
    // }

    // if (exp) { // 1-2-1 = -2
    //     //results = eval(exp);
    //     //console.log(results);
    //     console.log(eval(exp));
    // }

    if (dispExp) { // [1, +, 2, -, 1] => 1+2-1 = 2
        /* try {
            results = eval(dispExp)
        } catch(err) {
            console.log(err);
            if (err == 'SyntaxError')
                console.log('Syntax')
        } */

        results = eval(dispExp)
        //console.log(results);
    }

    //displayResult.value=eval(displayResult.value)
    display.value = results;
}

function updateDisplay() {
    // `updateDisplay()` function lets us update 
    // the values inside of the output.

    //console.log(display.value);
    dispExp = display.value;
    //console.log(dispExp);
}