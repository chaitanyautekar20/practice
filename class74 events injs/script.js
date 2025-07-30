// all evnet link
// https://developer.mozilla.org/en-US/docs/Web/Events

console.log("Hello")
let button = document.getElementById("btn")
button.addEventListener("dblclick",()=>{
    alert("I was clicked ")
    document.querySelector(".box").innerHTML="Hey you where clicked enjoy your click"
})

// you can see all the events at brower event mdn

button.addEventListener("contextmenu",()=>{
    alert("Dont hack us by right click")
    // document.querySelector(".box").innerHTML="Hey you where clicked enjoy your click"
})


// button.addEventListener("Keydown",(e)=>{
//     // alert("I was clicked ")
//     console.log(e)
//     // document.querySelector(".box").innerHTML=`{e}`
// })


document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})