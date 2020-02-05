const express = require('express');
const path = require('path');

const port = 3400;
const app = express();

app.use('/', express.static(path.join(__dirname, './../..')));
//test

app.listen(port, () => console.log('listening to port', port));
