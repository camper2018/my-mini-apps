var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cisco123',
  database: 'shopping_cart'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ', err);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

module.exports.connection = connection;