const express = require('express');
const dotenv = require("dotenv");
dotenv.config();
require('./models/db');

// const User = require('./models/user');
const PORT_URI = 8000;
const app = express();
const userRouter = require('./routes/user');
app.use(express.json());
app.use(userRouter);
// testing 
app.get('/', (req, res) => {
  res.json({ success: true, message: 'Welcome to backend zone!' });
});

app.listen(PORT_URI, () => {
  console.log(`Server listening on port:${PORT_URI}`);
});
