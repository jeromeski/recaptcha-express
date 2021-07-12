const express = require('express');
const path = require("path");

const bodyParser = require('body-parser');
const morgan = require('morgan')
const cors = require("cors");
require("dotenv").config();

const app = express();

const recaptcha = require('./routes/recaptcha');

app.use(morgan('dev'));
app.use(bodyParser.json({limit: '2mb'}));
app.use(cors());



app.use('/api', recaptcha);
app.use(express.static(path.join(__dirname, "/client/build")));

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`)
})