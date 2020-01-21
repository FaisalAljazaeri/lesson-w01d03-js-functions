const youRock = function (name) {
    return "You rock " + name + "!";
};

const square = function (num) {
    return num * num;
};

const cube = function (num) {
    return num * num * num;
};

const toTheFourth = function (num) {
    return num * num * num * num;
};

const calculator = function (num1, num2, operation) {

    if (isNaN(num1) || isNaN(num2)) {
        return "calculator only accepts numbers";
    }
    else if (operation === "add") {
        return num1 + num2;
    }
    else if (operation === "subtract") {
        return num1 - num2;
    }
    else if (operation === "divide") {
        return num1 / num2;
    }
    else if (operation === "multiply") {
        return num1 * num2;
    }
    else {
        return "claculator can only add, subtract, divide, or multiply";
    }
};

const rainDrop = function(num){
    let answer = "";

    if (num % 3 === 0) {
        answer += "Pling";
    }
    if (num % 5 === 0) {
        answer += "Plang";
    }
    if (num % 7 === 0) {
        answer += "Plong";
    }
    if (!answer) {
        answer = num.toString();
    }

    return answer;
};

const fizzBuzz = function(num){
    let answer = "";

    if(num % 3 === 0){
        answer += "Fizz";
    }
    if(num % 5 === 0){
        answer += "Buzz";
    }
    if(!answer){
        answer = num;
    }

    return answer;
};