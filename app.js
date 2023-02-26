const express = require('express');
const bodyparser = require('body-parser');
const dotenv = require("dotenv");
dotenv.config();
require('./models/db');
const cors = require("cors");

// const User = require('./models/user');
const PORT_URI = 8080;
const app = express();
const userRouter = require('./routes/user');


app.use(express.json());
app.use(bodyparser.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(userRouter);


// testing 
// app.get('/', (req, res) => {
//   res.json({ success: true, message: 'Welcome to backend zone!' });
// });

app.listen(PORT_URI, () => {
  console.log(`Server listening on port:${PORT_URI}`);
});
