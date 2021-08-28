const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
// const alert = require('alerts');
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
      res.render("alert");
      // res.render("signup");
    }
    else {
      const signupuser = new signupschema({
        name: req.body.name,
        email: req.body.email,
        password: req.body.pass,
        cpassword: req.body.cpass
      })

      await signupuser.save();
      res.status(201).render("index");
      }
    }
  catch (e) {
    res.status(400).send(error);
    }
})


app.get('/login', (req, res) => {
  res.render("login");
})

app.post('/login', async (req, res) =>{
  try {

    const p = req.body.pass;
    const usere = await signupuser.findOne({email:req.body.email});
    if(p !== usere.password) {
      res.render("alertlogin");
    }
    else {
      res.status(201).render("index");
    }
  } catch (e) {
    res.status(400).render("alertlogin");
  }
})
