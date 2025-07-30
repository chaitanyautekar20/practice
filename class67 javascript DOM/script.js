 console.log("Hello world")



// Hello world
// documemt.body
// VM204:1 Uncaught ReferenceError: documemt is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM204:1
// [NEW] Explain Console errors by using Copilot in Edge: click
         
//          to explain an error. 
//         Learn more
//         Don't show again
// document.body
// <body>​<div class=​"container">​<div class=​"box">​Box1​</div>​<div class=​"box">​Box2​</div>​<div class=​"box">​Box3​</div>​<div class=​"box">​Box4​</div>​<div class=​"box">​Box5​</div>​</div>​<script src=​"script.js">​</script>​</body>​
// document.body.childNodes
// NodeList(5) [text, div.container, text, script, text]0: text1: div.container2: text3: script4: textlength: 5[[Prototype]]: NodeList
// document.body.childNodes[0]
// #text
// document.body.childNodes[1]
// <div class=​"container">​…​</div>​
// document.body.childNodes[1].childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]0: text1: div.box2: text3: div.box4: text5: div.box6: text7: div.box8: text9: div.box10: textlength: 11[[Prototype]]: NodeList


let cont = document.body.childNodes[1]
console.log(cont)
console.log(cont.firstChild)
console.log(cont.lastChild)
// this is element and will not show the text 
console.log(cont.firstElementChild)
console.log(cont.lastElementChild.style.color="Red")
console.log(cont.firstElementChild.parentElement)
console.log(document.body.firstElementChild.childNodes)
// but if we will write only children then we will get only element 
console.log(document.body.firstElementChild.children)
console.log(document.body.firstElementChild.children[3].previousElementSibling)
// for text
console.log(document.body.firstElementChild.children[3].previousSibling)
// second element of the body
console.log(document.body.children)
console.log(document.body.children[1])

