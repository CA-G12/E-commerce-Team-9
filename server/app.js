const { join } = require('path')
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const router = require('./routers');

const app = express();

app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');


app.use('/api/v1', router);

app.use(express.static(join(__dirname, '..', 'client', 'build'))); 
app.get('*', (req, res)=>{
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'))
})

app.set('port', process.env.PORT || 4000);


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.get('/hello', (req, res) => {
  console.log('hhhh');
  res.json({ msg: 'Hi' });
});

app.use((err, req, res, next) => {
  console.log('server error');
  console.log(err);
  next();
});

module.exports = app;
