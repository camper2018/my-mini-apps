const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const csvReportGernerator = require('./model').csvReportGernerator;
const fileUpload = require('express-fileupload');
const fs = require('fs')
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
   fs.writeFile(__dirname +'/test-file.csv', result ,function(err) {
      if (err) {
        throw err;
      }
      res.send('<a href="/download_CSV">Download CSV file</a>');
   });
   //res.render('index', { data: result});
   //res.end(result);
});
app.get('/download_CSV', (req, res) => {
  res.download(path.join(__dirname, 'test-file.csv'), function(err) {
    if (err) {
      console.log(err);
    }
    res.end();
  });
});
