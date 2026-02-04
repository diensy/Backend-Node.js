
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b
}

function deivde(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }else {
        return a / b;
    }       
}
//module.exports

module.exports = {
    add,
    subtract,
    deivde
};