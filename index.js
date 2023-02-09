const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
mongoose.set('strictQuery',true)   

const config = require('./config/key');

const {User} =require("./models/User");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect(config.MONGO_URI,{
    }).then(()=> console.log('mongoDB CONNECT SUC'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('안녕하이이이이이세요')
})

app.post('/register',(req, res) =>{
    //회원가입할때필요한 정보들을 client에서 가져오면
    //그것들을 데이터 베이스에 넣는다 
 

    const user = new User(req.body)

    user.save((err,userInfo)=> {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});  