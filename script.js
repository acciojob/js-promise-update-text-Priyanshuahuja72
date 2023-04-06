function promise1()
{
    return new Promise((resolve , reject) => {
        setTimeout(() => {
           resolve("Hello, world!")
        }, 1000)
    })
}
promise1().then((res)=>{
    let output = document.getElementById("output");
    output.innerHTML = `${res}`;
});