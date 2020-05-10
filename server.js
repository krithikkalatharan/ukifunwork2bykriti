const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const coloresRouter = require('./routers/colores');
const userRouter = require('./routers/user');
const config = require('./services/config');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/colores', coloresRouter);
app.use('/user',userRouter);

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.set('keyJWT', config.key);

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);