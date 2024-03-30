let a = [];

for (let i = 0; i < 20; i++) {
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    a.push(randomNumber);
}

console.log(a);