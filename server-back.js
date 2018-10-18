var express = require("express");
var app = express();
var router = express.Router();
var controller = require("./controller");

router.route('/query')
    .get(controller.query);

app.use(router);

app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});