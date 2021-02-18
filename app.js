const express = require('express');
const app = express();
const crudRoutes = require('./api/routes/crud');


app.use('/crud', crudRoutes);

module.exports = app;