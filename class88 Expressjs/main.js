const express = require('express')
const app = express()
const port = 3000
//static files to see
//app.use is the middlewar and express.stactic is the midlewar
app.use(express.static('public'))

//app.get app.put app.post app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World! Chaitanya')
})

app.get('/about', (req, res) => {
  res.send('About us')
})

app.get('/contact', (req, res) => {
  res.send('Contact us')
})

app.get('/blog', (req, res) => {
  res.send('This is a blog')
})

// but we will not write only one blog so we require
app.get('/blog/:slug/:secoond', (req, res) => {
    //logic to fetch {slug}from the db
    console.log(req.params);
    //this query for the tellig small data
    console.log(req.query);
    
  res.send(`this into to${req.params.slug}and ${req.params.secoond}`)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
