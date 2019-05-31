const express = require('express');
const db = require('./db/index');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});

app.post('/addUserInfo', (req, res) => {
  const {name} = req.body;
  const {email} = req.body;
  const {password} = req.body;
  const {shipping_line1} = req.body;
  const {shipping_line2} = req.body;
  const {shipping_city} = req.body;
  const {shipping_state} = req.body;
  const {shipping_zip} = req.body;
  const {phoneNumber} = req.body;
  const {creditCard} = req.body;
  const {expiryDate} = req.body;
  const {CVV} = req.body;
  const {billingZip} = req.body;
  if (!req.body.insertId) {
    db.connection.query('INSERT INTO UserInfo SET ?', {name, email, password}, function (error, results, fields) {
    if (error) {
      throw error
    }
    res.json(results.insertId);
    res.end();
  });
  } else {
    db.connection.query(`UPDATE UserInfo SET ? where ID=${req.body.insertId} `, {shipping_line1, shipping_line2, shipping_city, shipping_state, shipping_zip, phoneNumber, creditCard, billingZip, CVV, expiryDate}, function (error, results, fields) {
      if (error)  {
        throw error;
      }
      res.json(req.body.insertId);
      res.end();
    });
  }
});
