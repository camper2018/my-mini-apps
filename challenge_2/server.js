const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const csvReportGernerator = require('./model').csvReportGernerator;
const fileUpload = require('express-fileupload');
const app = express();
const port = 3000;
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(fileUpload());
app.use(express.static('client'));
app.set('view engine', 'ejs');
app.set('views', 'client');


app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
app.post('/upload_json', (req, res) => {
  if (Object.keys(req.files).length === 0) {
    res.status(400).send('No files were uploaded');
  }
  let myfile = req.files.myFile.data.toString('utf8');
  var result = csvReportGernerator(JSON.parse(myfile));
   res.render('index', { data: result});
   res.end();
});

