const mysql = require('mysql');
const config = require('./dbconfig.js');

let connection = mysql.createConnection(config);

let sql = `SELECT * FROM usuarios`;

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    connection.query(sql, (err, results, fields) => {
    if (err) {
    return console.error(err.message);
    }
    console.log(results);
    connection.end(); 
    });
    
  });