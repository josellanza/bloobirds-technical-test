const testsql = require('./config_sql');

const query = (req, res) => {
    console.log("test");
    testsql.init();
    
    testsql.query('SELECT * FROM recipe')
    .then((data) => {
        res.writeContinue();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(data);
        res.end();
    });
}

module.exports = {
    query : query
}