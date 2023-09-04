const express = require('express')
const path = require('path')
const app = express()
const apiRouter = require('./routes/routing.js')

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