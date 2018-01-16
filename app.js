const express      = require('express');
const path         = require('path');
// const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
// const layouts      = require('express-ejs-layouts');
const mongoose     = require('mongoose');
const session      = require('express-session');
const passport     = require('passport');
const cors         = require('cors');


require('dotenv').config();


require('./config/passport-config');


mongoose.connect(process.env.MONGODB_URI);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(layouts);
app.use(session({
  secret: 'angular and express and auth and shhhhh',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
  credentials: true,                   // allow other domains to send cookies
  origin: ['http://localhost:4200'] // these are the domains that are allowed
}));

//ROUTES GO HERE ----------------------------------------------------------

const index = require('./routes/index');
app.use('/', index);

const liquor = require('./routes/liquor-api.js');
app.use('/api/liquor', liquor);

const auth = require('./routes/auth-routes.js');
app.use('/api', auth);
//
// const transactions = require('./routes/transactions-model.js');
// app.use('/api', transactions);




//HERE GO ROUTES ------------------------------------------------------------



// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
