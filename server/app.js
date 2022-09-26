const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const router = require('./routers');

const app = express();

app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');

// app.use(express.static(join(__dirname, '..', 'client', 'build')));
app.set('port', process.env.PORT || 4000);

// app.use('/api/v1', router);
app.use(router);

app.use((req, res) => {
  console.log('not found error');
});

app.use((err, req, res, next) => {
  console.log('server error');
  next();
});

module.exports = app;
