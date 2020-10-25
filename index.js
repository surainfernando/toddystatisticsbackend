
const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000
const parse=require('csv-parse')
const fs=require('fs')
const simpret=require('./statisticsclasses/simplereturn')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    console.log("requesr trecived 11111111111111111111111111111111111111111")
  res.send('Hello World ffdsfddsfshh mmmilgdgsfgsfsggsgfdfsgsdgs!')
})

app.get('/FirstGraph', (req, res) => {
    var csvdata=[]
    fs.createReadStream(
        'bookcsv.csv')
    .pipe(parse({delimiter:','}))
    .on('data',function(datarow){
        csvdata.push(datarow)
    }).on('end',function(){
        console.log(csvdata)
        res.send(csvdata)
    })
    console.log("ruuuuequesr trecived 11111111111juu111111111111111111111111111111")
 
})
app.get('/Graph2', (req, res) => {
  const simp=new simpret()
  const xx=simp.printname()
  
  console.log("ruuuuequesr trecived 11111111111juu111111111111111111111111111111"+xx)
  res.send(xx)

})


app.post('/register', (req, res) => {

    const firstname=req.body.firstname
    const lastname=req.body.lastname
    console.log(lastname+" "+firstname)
  
      res.send('Registered!')
    })
    //P



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

