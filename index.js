const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
mongoose.set('strictQuery',true)    

mongoose.connect('mongodb+srv://kotaewoo:2802@boilerplate.cnev8ao.mongodb.net/?retryWrites=true&w=majority',{
    }).then(()=> console.log('mong con suc'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});  