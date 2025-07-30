const express = require('express')
const blogs=require('./routes/blog')

const app = express()

const port = 3000
app.use('/blog', blogs)
// for the post we use
app.use(express.static("public"))
// get reuest has the limit of 2048 which is not fesible for the get request but 
// post request is use for the auth for security , or files etc 
// app.get('/', (req, res) => {
//     console.log('This the get request');
    
//   res.send('Hello World!')
// })

// app.post('/', (req, res) => {
//     console.log('this is the post request');  
//   res.send('Hello World!post')
// })

// app.put('/', (req, res) => {
//     console.log('this put');
    
//   res.send('Hello World!put')
// })

// we can also do the chaining this will not affect the 
app.get('/', (req, res) => {
    console.log('This the get request');
    
  res.send('Hello World!')
}).post('/', (req, res) => {
    console.log('this is the post request');  
  res.send('Hello World!post')
}).put('/', (req, res) => {
    console.log('this put');
    
  res.send('Hello World!put')
})

app.get('/index',(req,res)=>{
    res.sendFile('templates/index.html',{root:__dirname})
})

app.get('/api',(req,res)=>{
    res.json({a:1,b:2,c:3,name:["Harry","Chaitanya"]})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})