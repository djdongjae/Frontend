function test1(f) {
    let result = f(3, 4);
    console.log(result);
}

const add = function(a, b) {
    return a + b;
}

const multiply = function(a, b) {
    return a * b;
}

test1(add);
test1(multiply);