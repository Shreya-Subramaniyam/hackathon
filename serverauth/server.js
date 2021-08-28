const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const connectDB = require('./config/db');
connectDB();

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, '/clientauth')));
app.set("view engine", "hbs");
app.get('/', (req, res) => {
  res.render("index");
})

const PORT = process.env.port || 5000;

app.get('/', (req, res) => { res.send('response sent');
});


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


app.post('/signup', function(req, res) {
  
})
