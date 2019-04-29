const path = require('path');
const http = require('http');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const port=process.env.PORT || 3000

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(port,() => {
	console.log(`Server running at port `+port);
});