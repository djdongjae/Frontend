function factory() {
    return function (msg) {
        console.log(msg)
    }
}

const f = factory()
f("hello")