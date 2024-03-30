// let person = { name: "홍길동", age: 16};
// let a = [person, person];

let a = [
    { name: "홍길동", age: 16},
    {}
]

a[1] = a[0];

console.log(a[0] == a[1]);