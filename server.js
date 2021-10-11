const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});



app.post("/api/fileanalyse", upload.single('upfile'),(req,res)=>{
  res.json({
    "name": req.file.originalname	,
   "type":req.file.mimetype ,
    "size":req.file.size 
    })
})







const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
