let a = [];

for (let i = 0; i < 20; i++) {
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    a.push(randomNumber);
}

a.sort((a, b) => a - b);
console.log(a);

a.sort((a, b) => b - a);
console.log(a);
