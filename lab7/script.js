function printf() {
    console.log("Hello World from print function in console.")
}

function printf2() {
    document.write("Hello World.")
}

function add() {
    var a=10, b=12;
    document.write("Addition of a and b is = "+(a+b))
}

document.getElementById("submit").addEventListener("click", ()=>{
    printf()
    printf2()
    add()
})
