function outterFunc() {
    print("hello")

    function print(msg) {
        console.log(msg)
    }
}

outterFunc()