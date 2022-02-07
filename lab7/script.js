function printf() {
    console.log("Hello World from print function in console.")
}

function printf2() {
    document.write("Hello World.")
}

document.getElementById("submit").addEventListener("click", ()=>{
    printf()
    printf2()
})
