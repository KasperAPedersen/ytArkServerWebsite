// --
let usePort = 3000;
// --
let morgan = require('morgan');
let express = require('express');
let app = new express();

app.use(morgan('dev'));
app.use(express.static('public'));

app.listen(usePort, (err) => {
    console.log(err ? err : usePort);
});