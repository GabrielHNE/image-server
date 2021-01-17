const express = require('express');
const morgan = require('morgan');
const multer = require('multer');

const app = express();
const uploadsConfig = require('./config/uploads');
const upload = multer(uploadsConfig);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.post('/', upload.single('file'), (req, res) => {
    if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false
      });
  
    } else {
      console.log('file received');
      return res.send({
        success: true
      })
    }
});


app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server running on: http://localhost:${process.env.PORT || 3000}`);
})


