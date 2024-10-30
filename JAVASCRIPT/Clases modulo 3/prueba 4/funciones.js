//selectores

function funcionSuma(c1, c2){
    c1=document.getElementById("v1").value
    c2=document.getElementById("v2").value
    console.log(c1)
    console.log(c2)
    return c1+c2
}
document.getElementById("op").innerHTML = funcionSuma(2,3)

const v1=document.getElementById("v1")
const v2=document.getElementById("v2")

console.log(v1)
