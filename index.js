
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
  res.send('Hello Worl.d ffdsfddsfshh mmmilgdgsfgsfsggsgfdfsgsdgs!')
})
const mdata = [{  
  name: 'Ayaan',  
  age: 26  
  },{  
   name: 'Ahana',  
   age: 22  
   },{  
   name: 'Peter',  
   age: 40      
   },{  
   name: 'Virat',  
   age: 30  
   },{  
   name: 'Rohit',  
   age: 32  
   },{  
   name: 'Dhoni',  
   age: 37  
   }]  

app.get('/FirstGraph', (req, res) => {
    var csvdata=[]
    fs.createReadStream(
        'bookcsv.csv')
    .pipe(parse({delimiter:','}))
    .on('data',function(datarow){
        csvdata.push(datarow)
    }).on('end',function(){
        console.log(mdata)
        res.send(mdata)
    })
    console.log("kruuuuequesr trecived 11111111111juu111111111111111111111111111111")
 
})
app.get('/jsondisplay', (req, res) => {
  var csvdata=[]
  fs.createReadStream(
      'Book365csv.csv')
  .pipe(parse({delimiter:','}))
  .on('data',function(datarow){
      csvdata.push(datarow)
  }).on('end',function(){
      //console.log(csvdata)
      let headers = csvdata[0] 
      console.log(headers)
      res.send(csvdata)
  })
  console.log("ruuuuequesr gtrecived 11111111111juu111111111111111111111111111111")

})
app.get('/jsondisplay2', (req, res) => {
  const fs = require("fs"); 
  csv = fs.readFileSync("Book365csv.csv") 
    
  // Convert the data to String and 
  // split it in an array 
  var array = csv.toString().split("\r"); 
    
  // All the rows of the CSV will be  
  // converted to JSON objects which  
  // will be added to result in an array 
  let result = []; 
    
  // The array[0] contains all the  
  // header columns so we store them  
  // in headers array 
  let headers = array[0].split(", ") 
  console.log("----------------------------------------------")
  console.log(headers)

})


app.get('/Graph2', (req, res) => {
  const simp=new simpret()
  const xx=simp.printname()
  
  console.log("ruuuuequesr trecived 11111111111juu111111111111111111111111111111"+xx)
  res.send(xx)

})
// http://localhost:5000/jsondisplay


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

