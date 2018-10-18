var mysql = require('mysql');

var con;

var init = () => {
    con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "c0c0l0c0",
        database: "techtest"
    });
}

var query = function(sql) {
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            if (err) return reject(err);
            con.query(sql, function (err, result) {
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