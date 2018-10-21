const express = require("express");
const app = express();
const router = express.Router();
const controller = require("./controller");

router.route('/query')
  .get(controller.query)

app.use(router);

app.listen(3000, () => {
    console.log("Node server running on https://localhost:3000");
});