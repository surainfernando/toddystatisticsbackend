
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
    
  var x=csvJSON(csv);
  console.log(x)
  
  res.send(x)
//   const fs = require("fs"); 
//   csv = fs.readFileSync("Book365csv.csv") 
    

//   var array = csv.toString().split("\r"); 
    

//   let result = []; 
    

//   let headers = array[0].split(", ") 
//   console.log("----------------------------------------------")
//   console.log(headers)
//   for (let i = 1; i < array.length - 1; i++) { 
//     let obj = {} 
    
//     // Create an empty object to later add  
//     // values of the current row to it 
//     // Declare string str as current array 
//     // value to change the delimiter and  
//     // store the generated string in a new 
//     // string s 
//     let str = array[i] 
//     let s = ''
    
//     // By Default, we get the comma seprated 
//     // values of a cell in quotes " " so we  
//     // use flag to keep track of quotes and  
//     // split the string accordingly 
//     // If we encounter opening quote (")  
//     // then we keep commas as it is otherwise 
//     // we replace them with pipe | 
//     // We keep adding the characters we  
//     // traverse to a String s 
//     let flag = 0 
//     for (let ch of str) { 
//       if (ch === '"' && flag === 0) { 
//         flag = 1 
//       } 
//       else if (ch === '"' && flag == 1) flag = 0 
//       if (ch === ', ' && flag === 0) ch = '|'
//       if (ch !== '"') s += ch 
//     } 
    
//     // Split the string using pipe delimiter |  
//     // and store the values in a properties array 
//     let properties = s.split("|") 
    
//     // For each header, if the value contains 
//     // multiple comma separated data, then we 
//     // store it in the form of array otherwise 
//     // directly the value is stored 
//     for (let j in headers) { 
//       if (properties[j].includes(", ")) { 
//         obj[headers[j]] = properties[j] 
//           .split(", ").map(item => item.trim()) 
//       } 
//       else obj[headers[j]] = properties[j] 
//     } 
    
//     // Add the generated object to our 
//     // result array  
//     result.push(obj) 
//   } 
//  // let json = JSON.stringify(result); 
//  let json=result
//   console.log(json)
//   res.send(json)
 

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

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

app.get('/getCSVForDemonstration', (req, res) => {
  const fs = require("fs"); 
  csv = fs.readFileSync("Book365csv.csv") 
    
  var x=cleanCSV(csv);

 
  console.log("table request recieved")
  var xx=[{'DataSeries-A':899880,'DataSeries-B':33,'DataSeries-C':33}]
res.send(x)

})
app.get('/temp1', (req, res) => {
 
  res.send('bbbbbb123')

})



//******************************************************************************************* */

function cleanCSV1()
{ var x=[]
  var obj1={}
  obj1["name"]="surain"
  obj1["age"]=21
  x.push(obj1)
  var obj2={}
  obj2["name"]="surain1"
  obj2["age"]=44
  x.push(obj2)

  console.log(x)
  return x;

}

function cleanCSV(csv)
{  var lines=csv.toString().split("\n");
var lines=csv.toString().split("\n");

var result = [];

var headers=lines[0].split(",");


for(i=1;i<lines.length;i++)
{ var obj1={}
var currentline=lines[i].split(",");
obj1[headers[0]]=currentline[0]
obj1['DataSeries-B']=currentline[1]
obj1['DataSeries-C']=currentline[2].trim()
result.push(obj1)


}


// obj1[headers[0]]="surain"
// obj1[headers[1]]=21
// obj1[headers[2]]=212
// result.push(obj1)
// var obj2={}
// obj2[headers[0]]="surain1"
// obj2[headers[1]]=44
// obj2[headers[2]]=445
// result.push(obj2)
return result

}


function csvJSON(csv){

  var lines=csv.toString().split("\n");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

	  var obj = {};
	  var currentline=lines[i].split(",");

	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }

	  result.push(obj);

  }
  
  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}