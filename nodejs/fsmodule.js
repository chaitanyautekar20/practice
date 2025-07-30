const fs=require('fs');

fs.readFile('file.txt','utf-8',(err,data)=>{
    // this call back function
    console.log(err,data)
    
})
// this will get printed first because our system requires the time for the setting up of the file
// as it works on the non blocking IO model
console.log("Reading has finished")

// If we want to read the content if we want to block the mode

const b=fs.readFileSync('file.txt');
console.log(b.toString());
console.log("File reading has finished")

// wrinting to the file 
// fs.writeFile('file2.txt',"this is the 2nd file ",()=>{
//     console.log("Written done")
// });

// console.log("finished reading")

d=fs.writeFileSync('file2.txt',"BE HAPPY")
console.log(d)
console.log("frinished writing")
