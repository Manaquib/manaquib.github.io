function printf() {
    console.log("Hello World from function in console.")
}

function printf2() {
    document.write("<br><br>")
    document.write("Hello World.")
    document.write("<br>Check the console for a result.")
}

function add() {
    var a = 10,
        b = 12;
    document.write("<br>")
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

function calc() {
    var a = 10,
        b = 20;
    document.write("<br><br>")
    document.write("<br>Basic calculations")
    document.write("<br>Addition of 10 and 20 = " + (a + b))
    document.write("<br>Subtraction of 10 and 20 = " + (a - b))
    document.write("<br>Multiplication of 10 and 20 = " + (a * b))
    document.write("<br>Division of 10 and 20 = " + (a / b))
}

document.getElementById("submit").addEventListener("click", () => {
    printf()
    printf2()
    add()
    table()
    calc()
})