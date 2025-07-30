


// document.querySelectorAll(".box").forEach((e)=>{
//     console.log(e)
//     e.style.backgroundColor="red"
// })

// let box=document.getElementsByClassName("box")
// box[1].style.backgroundColor="red"


let boxes = document.querySelector(".container").children

function getRandomColor(){
    let val1 = Math.ceil(0+Math.random()*255);
    let val2 = Math.ceil(0+Math.random()*255);
    let val3 = Math.ceil(0+Math.random()*255);

    return `rgb(${val1}, ${val2}, {val3})`
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
    console.log(e)
})