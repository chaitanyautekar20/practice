console.log(document.querySelector(".box"))
console.log(document.querySelector(".box").innerHTML)
console.log(document.querySelector(".container").innerHTML)
console.log(document.querySelector(".box").innerText)
console.log(document.querySelector(".container").innerText)
// outer html full html and element itself
console.log(document.querySelector(".container").outerHTML)
// aplicable only to the tag
console.log(document.querySelector(".container").tagName)
// aplicable to all the nodes not only to the tag
console.log(document.querySelector(".container").nodeName)
// this help in the hidding 
// console.log(document.querySelector(".container").hidden=true)
console.log(document.querySelector(".box").innerHTML="Hey I am Chaitanya")
console.log(document.querySelector(".box").hasAttribute("style"))
// which attribute is their
console.log(document.querySelector(".box").getAttribute("style"))
// set attribute for setting the style
console.log(document.querySelector(".box").setAttribute("style","display:inline"))
console.log(document.querySelector(".box").attributes)
// console.log(document.querySelector(".box").remove("style"))
// document.desigmode ="on " helps in designg the enitre website
// console.log(document.designMode="on")
// console.log(document.querySelector(".box").dataset)
// let div=document.createElement("div");
// div.innerHTML="Hello"
// div.setAttribute("class","created");
// at the end 
// document.querySelector(".container").append(div);
// document.querySelector(".container").prepend(div);

let cont=document.querySelector(".container")
cont.insertAdjacentHTML("beforebegin","I am Chaitanya")


// class list
console.log(document.querySelector(".container").classList)
console.log(document.querySelector(".container").className)
// we can add and remove the class also
console.log(document.querySelector(".container").classList.remove("red"))
// toggle means if open the off and vice versa
console.log(document.querySelector(".container").classList.toggle("red"))








