const mysql = require('mysql');

let con;

const init = () => {
    con = mysql.createConnection({
        host: "localhost",
        user: "josellanza", 
        password: "Jose1234$",
        database: "techtest"
    });
}

const query = (sql) => {
    return new Promise((resolve, reject) => {
        con.connect((err) => {
          if (err) return reject(err);
          con.query(sql,  (err, result) => {
              if (err) return reject(err);
              return resolve(result);
          });
        });
    });
}

module.exports = {
    init : init,
    query : query
}