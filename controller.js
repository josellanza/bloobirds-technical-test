var testsql = require('./config_sql');


var query = function(req, res) {
    console.log("test");
    testsql.init();
    
    testsql.query('select * from recipe').then((data) => {
        res.writeContinue();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.write(JSON.stringify(data));
        res.end();
    });
}

module.exports = {
    query : query
}