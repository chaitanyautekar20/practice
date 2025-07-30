const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
//midleware helps in the modifying the request after taking the request
//their some build in midleware
app.use(express.static("public"))

// midleware 1-logger for our application
app.use((req,res,next)=>{
  //we can modify with the help of medliware  
  console.log(req.headers);
  req.Chaitanya="I am Chaitanya"
  
  console.log('m1');

    // res.send("Hacked by midlearware")
    // fs.writeFileSync("file.txt",`date${Date.now()} is a ${req.method}`)
    fs.appendFileSync("log.txt",`date${Date.now()} is a ${req.method}`)

    console.log(`date${Date.now()} is a ${req.method}`);
    
    next()
    
})

app.use((req,res,next)=>{
    console.log('m2');
    next()
    
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello World!'+req.Chaitanya)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
