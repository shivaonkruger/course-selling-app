const express = require('express')
const app = express()
const port = 3000


app.get('/user/signup', (req, res) => {
    res.json({
        message: 'signup endpoint' 
    })
})

app.post('/user/signin', (req, res) => {
   res.json({
        message: 'signin endpoint' 
    })
})

app.get('/user/courses', (req, res) => {
    res.json({
        message: 'courses endpoint' 
    })
})

app.post('/user/purchases', (req, res) => {
   res.json({
        message: 'purchase endpoint' 
    })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//app.listen(3000);