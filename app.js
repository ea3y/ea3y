const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('Home page. Kak tebe takoe, Elon Musk?');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => 
console.log('connected to DB') 
);

// app.listen(process.env.PORT || 5000);

app.listen(process.env.PORT, '0.0.0.0', function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});