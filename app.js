let express = require('express'),
app = express();
 
app.get('/', function (req, res) {
    res.send('hello world');
});
 
// app.listen can be used to have an app listen
// on a given port
app.listen(9000, function () {
    console.log('is up on port 9000');
});
