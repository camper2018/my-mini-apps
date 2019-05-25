const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const csvReportGernerator = require('./model').csvReportGernerator;
app.use(morgan('dev'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('client'));
//app.set('view engine', path.join(__dirname, 'client', 'index.html'));
app.set('view engine', 'ejs');
app.set('views', 'client');
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
app.post('/upload_json', (req, res) => {

  var parsed = JSON.parse(req.body.json);
  var result = csvReportGernerator(parsed);
  res.render('index', { data: result});
  res.end();
});

