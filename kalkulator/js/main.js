const numButtons = document.querySelectorAll('[data-number]')
const opButtons = document.querySelectorAll('[data-operation]')

const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')


const previousOperationDisplay = document.querySelector('[data-previous]');
const currentOperationDisplay = document.querySelector('[data-current]');

console.log(equalsButton);

// class to set what is going to be displayed 
class Calculator {
    constructor(previousOperationDisplay, currentOperationDisplay) {
        this.previousOperationDisplay = previousOperationDisplay;
        this.currentOperationDisplay = currentOperationDisplay;
        // sets text elements inside of the class
        this.clear();
    }

    clear() {
        this.currentOperation = "";
        this.previousOperation = "";
        this.operation = undefined;
        // no operation selected once cleared
        // ???
    }

    delete() {

    }

    appendNumber(number) {
        // if there already is a . and to not add multiple ...
        // how does return work
        if (number === '.' && this.currentOperation.includes('.')) return
        // this.currentOperation = number;
        this.currentOperation = this.currentOperation.toString() + number.toString();
    }
    // what will occur every time a user clicks on a number to add to the display


    chooseOperation(operation) {
        // there has to be something to operate on
        if (this.currentOperation === "") return;

        // so it doesnt overwrite if there is already something stored
        if (this.previousOperation !== "") {
            this.compute()
        }
        // updates the result, so for example
        // 55 + 55 then we press *
        // if will do 110 * not 55 *

        this.operation = operation;
        this.previousOperation = this.currentOperation;
        this.currentOperation = "";
    }
    // controls what will happen anytime a user clicks on any operation button.


    compute() {
        let computation
        // not defined here, can i do that?
        const prev = parseFloat(this.previousOperation) // convert string to number
        const current = parseFloat(this.currentOperation)

        if (isNaN(prev) || isNaN(current)) return;
        //not a number

        // switch - bunch of if statements on single object
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break
            // break - not go further

            case '-':
                computation = prev - current;
                break

            case '÷':
                computation = prev / current;
                break

            case 'X':
                computation = prev * current;
                break

            default:
                return
        }

        this.currentOperation = computation;
        this.operation = undefined;
        this.previousOperation = "";

        // ???

    }
    // It takes the values inside your calculator and displays the result.

    updateDisplay() {
        this.currentOperationDisplay.innerText = this.currentOperation;
        this.previousOperationDisplay.innerText = this.previousOperation;
    }
};

const calculator = new Calculator(previousOperationDisplay, currentOperationDisplay);

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
});

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})


equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

clearButton.addEventListener('clear', button => {
    calculator.clear();
    calculator.updateDisplay();
})