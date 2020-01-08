const express = require('express');

const port = 3400;
const app = express();

app.listen(port, console.log('listening to port', port));
