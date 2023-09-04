const express = require('express')
const path = require('path')
const app = express()

app.set('views',path.resolve(__dirname+'/views') )
app.set('view engine','ejs')
let port = 8000
// app.listen(port,function(){
//      console.log(`Server is running at http://localhost:${port}`)
// })

app.get('/', (req,res)=>{
     console.log(req.query.name)
     // return res.send('<h1>Hello World</h1>')
     return res.render('index',{name:"안동",action:["수영","축구","야구"]})
})
app.listen(port,()=>{
     console.log(`Server is running at http://localhost:${port}`)
})