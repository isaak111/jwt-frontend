const mysql = require('mysql')

const db = mysql.createConnection({
  host:"localhost",
  user:"user",
  password: "password",
  database: "pudb"
})

module.exports = db