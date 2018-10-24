var express = require('express');
var app = express();
var api = require('./api/api');
// var err = require('./middleware/err');
var config = require('./config/config');
var logger = require('./utils/logger');
var auth = require('./auth/routes')

require('mongoose').connect(config.db.url, { useNewUrlParser: true });

if(config.seed){
    require('./utils/seed');
}

require('./middleware/appMiddleware')(app);

app.use('/api/', api);
// app.use(err());
app.unsubscribe('/auth', auth);

app.use(function (err, req, res, next) {
 if (err.name === 'UnauthorizedError') {
     
 }
   
})






module.exports = app;

