const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

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
  function csvReportGernerator(obj) {
    var csvReport = [];
    var fields = Object.keys(obj);
    //var values = Object.values(obj);
    var values = [];
    for (var key in obj) {
      if (key !== 'children') {
        values.push(obj[key]);
      }
    }
    var index = fields.indexOf('children');
    fields.splice(index, 1);
    //values.splice(index, 1);
    values = values.join(',');

    function traverseChildren(childObj) {
      for (var key in childObj){
        if (!fields.includes(key) && key !== 'children') {
          fields.push(key);
        }
      }
      var arr = [];
      var keys = Object.keys(childObj);
      var index = 0;
      while (index < fields.length) {
        if (fields[index] === keys[index]) {
          arr.push(childObj[keys[index]]);
        } else {
          arr.push(',');
         }
       index++;
      }
      values+= '\n';
      values+= arr.join(',')
      if (childObj.children.length > 0) {
        childObj.children.forEach(function(child) {
           traverseChildren(child);
        });
      }

    }
    if (obj.children.length > 0) {
      obj.children.forEach(function(child) {
        traverseChildren(child);
      });
    }
    fields = fields.join(',');
    csvReport.push(fields);
    csvReport.push(values);
    return csvReport.join('\n');
  }
  var parsed = JSON.parse(req.body.json);
  var result = csvReportGernerator(parsed);
  res.render('index', { data: result});

  //res.end(result);
});

