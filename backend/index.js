const express = require('express');
require('./db/config');
const User = require('./db/User');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get('/register', async (req, res) => {
    try {
      let users = await User.find(); // Mongoose will directly return an array of users
      res.send(users);
    } catch (error) {
      res.status(500).send({ message: "Error fetching data", error: error.message });
    }
  });

app.post('/register', async (req,res)=>{
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
});

app.listen(5000,()=>{
    console.warn("server is running on port 5000");
});