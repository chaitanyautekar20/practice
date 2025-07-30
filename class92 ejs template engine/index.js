const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  let siteName = "Addidas"
  let searchText = "Search now"
  let arr=[1,2,3,4]
  res.render("index",{siteName:siteName,searchText:searchText,arr})
  // res.sendFile("templates/index.html",{root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
