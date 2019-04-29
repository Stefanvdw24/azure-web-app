const express = require('express');
const http = require('http');
const port=process.env.PORT || 3000
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(port,() => {
	console.log(`Server running at port `+port);
});