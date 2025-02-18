let mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  user: "Sara",
  password: "yasmin8836"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
