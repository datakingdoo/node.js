const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const app = express()
const apiRouter = require('./routes/routing')

// Connect to MongoDB
mongoose.connect("mongodb+srv://root:1234@kingdoo.9fyjfi0.mongodb.net/?retryWrites=true&w=majority",process.env.MONGO_URI, { useNewUrlParser: true})
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));


app.set('views',path.resolve(__dirname+'/views') )
app.set('view engine','ejs')
let port = 8000
// app.listen(port,function(){
//      console.log(`Server is running at http://localhost:${port}`)
// })

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',apiRouter)


app.listen(port,()=>{
     console.log(`Server is running at http://localhost:${port}`)
})