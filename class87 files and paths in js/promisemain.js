import fs from "fs/promises"

let a= await fs.readFile("harry.txt")
let b =await fs.writeFile("harry.txt","this is the promise ")
console.log(a.toString());

