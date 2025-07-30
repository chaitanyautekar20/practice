console.log("This is Chaitanya")

console.log("This is abc")

// this will execute after 2 sec script will not stop its execution 
  
setTimeout(() => {
    console.log("I am inside the settime")
},2000);

console.log("this is the end")
const fn =(agr)=>{
    console.log("I am another call back function ")
}
const callback=(arg)=>{
    console.log(arg)
    alert("You are using callback")
    fn("Chaitanya")
}
const loadscript=(src,callback) => {
  let sc = document.createElement("script");
  sc.src=src;
  sc.onload=callback("Chaitanya")
  document.head.append(sc)
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
// prism is basicall the syntax higliter
// It is used in highlighting
// because of callback it becomes peramid of dome and it become difficult to handle
// so for this problem we use promise
