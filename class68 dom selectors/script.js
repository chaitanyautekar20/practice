console.log("Chaitnaya")

// let boxes=document.getElementsByClassName("box")
// console.log(boxes)
// boxes[2].style.backgroundColor ="red"
// this by id
document.getElementById("red").style.backgroundColor ="red"
// this by query selector
document.querySelector(".box").style.backgroundColor="yellow"

// for selecting all
// will give the html collection 
console.log(document.querySelectorAll(".box"))
// we will require the for loop for accesing the element
document.querySelectorAll(".box").forEach(e=>{
    console.log(e)
    e.style.backgroundColor="orange"
})

// by tag name
// will return the html colletion
console.log(document.getElementsByTagName("div"))
e=document.getElementsByTagName("div")
console.log(e[3].matches("#red"))
console.log(e[3].closest("#red"))
console.log(document.querySelector(".container").contains(e[2]))



