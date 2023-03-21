let output = document.getElementById("output");
function promise1()
{
    return new Promise((resolve , reject) => {
        setTimeout(() => {
           resolve(
            output.innerHTML = "Hello, world!"
           )
        }, 1000)
    })
}
promise1();
}