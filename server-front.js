let express = require('express');
let app = express();

app.use(express.static(__dirname + '/dist'))

app.get('/',  (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(8080,  () => {
  console.log('Example app listening on port 8080!');
});
