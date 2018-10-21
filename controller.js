const testsql = require('./config_sql');

const query = (req, res) => {
    const search = req.query.id;
    console.log(search)
    console.log("test")
    testsql.init();

    
    testsql.query('SELECT * FROM recipe WHERE name LIKE "%'+req.query.id+'%"')
    .then((data) => {
        console.log(search);
        res.writeContinue(data);
        console.log(data)
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