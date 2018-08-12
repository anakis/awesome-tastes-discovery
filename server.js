var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'dist'), {
    etag: false
}));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});


app.listen(process.env.PORT || 3000, function () {
    console.log("Starting service...");
});