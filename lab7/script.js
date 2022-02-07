function printf() {
    console.log("Hello World from print function in console.")
}

function printf2() {
    document.write("Hello World.")
}

function add() {
    var a = 10, b = 12;
    document.write("<br><br>")
    document.write("<br>")
    document.write("<br>Addition of a and b is = " + (a + b))
}

function table() {
    document.write("<br><br>")
    document.write("<br>This is multiplication table of 10")
    var a = 10;
    for (var i = 1; i <= a; i++) {
        document.write("<br>" + i + " * 10 = " + (i * 10))
    }
}

document.getElementById("submit").addEventListener("click", () => {
    printf()
    printf2()
    add()
    table()
})
