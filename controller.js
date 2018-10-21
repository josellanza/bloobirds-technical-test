const testsql = require('./config_sql');

const query = (req, res) => {
    console.log("test");
    testsql.init();
    const search = req.body;
    
    testsql.query('SELECT * FROM recipe WHERE name LIKE '%search%'').then((data) => {
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