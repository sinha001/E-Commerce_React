const express = require("express");
require("./db/config");
const User = require("./db/User");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/register", async (req, res) => {
  try {
    let users = await User.find(); // Mongoose will directly return an array of users
    res.send(users);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error fetching data", error: error.message });
  }
});

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

//login api..
app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({result : "No User Found"});
    }
  }
  else{
    res.send({result : "No User Found"});
  }
});

app.listen(5000, () => {
  console.warn("server is running on port 5000");
});
