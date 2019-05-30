const express = require('express');
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
  console.log(req.body);

});
