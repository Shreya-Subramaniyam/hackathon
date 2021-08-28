const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
// const popup = require('popups');

const connectDB = require('./config/db');
connectDB();

const signupschema = require('./models/schema');
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, '/clientauth')));
app.set("view engine", "hbs");
app.get('/', (req, res) => {
  res.render("index");
})

const PORT = process.env.port || 5000;

// app.get('/', (req, res) => { res.send('response sent');
// });


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.get('/signup', (req, res) => {
  res.render("signup");
})


app.post('/signup', async (req, res) => {
  try {

    if(req.body.pass !== req.body.cpass) {
      alert('passwords do not match')
    }
    else {
      const signupuser = new signupschema({
        name: req.body.name,
        email: req.body.email,
        password: req.body.pass,
        cpassword: req.body.cpass
      })

      await signupuser.save();
      }
    }
  catch (e) {
    res.status(400).send(error);
    }
})
