const testsql = require('./config_sql');

const query = (req, res) => {
    console.log("test")
    testsql.init();

    
    testsql.query('SELECT r.name AS recipe, i.name FROM recipe_ingredient AS t1 INNER JOIN recipe AS r ON t1.recipe_id = r.id INNER JOIN ingredient AS i ON t1.ingredient_id = i.id')
    .then((data) => {
      console.log(data)
        res.writeContinue(data);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.write(JSON.stringify(data));
        res.end();
    });

    // testsql.query('SELECT * FROM recipe WHERE name LIKE "%'+req.query.name+'%"')
    // .then((data) => {
    //   console.log(data[0].id)
    //     res.writeContinue(data);
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'application/json');
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    //     res.write(JSON.stringify(data));
    //     res.end();
    // });
}

module.exports = {
    query : query
}