function printf() {
    console.log("Hello World from print function in console.")
}

function printf2() {
    document.write("Hello World.")
}

function add() {
    var a = 10, b = 12;
    document.write("\n\n")
    document.write("\n")
    document.write("\nAddition of a and b is = " + (a + b))
}

function table() {
    var a = 10;
    for (var i = 1; i <= a; i++) {
        document.write("\n\n")
        document.write("\nThis is multiplication table of 10")
        document.write("\n" + i + " * 10 = " + (i * 10))
    }
}

document.getElementById("submit").addEventListener("click", () => {
    printf()
    printf2()
    add()
    table()
})
