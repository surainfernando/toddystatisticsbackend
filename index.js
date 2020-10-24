
const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World ffdsfddsfshh!')
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
