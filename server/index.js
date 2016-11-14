const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors())

let getRand = () => {
  return Math.round(Math.random()*9);
}

app.get('/api/colors', (req, res) => {
  let colors = ['#F44336', '#9C27B0', '#3F51B5', '#2196F3', '#4CAF50', '#FFEB3B', '#FF5722', '#795548', '#9E9E9E']
  let numOfBox = getRand()
  let randColor = colors[getRand()-1]
  res.send({box: `b${numOfBox}`, randColor})
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
