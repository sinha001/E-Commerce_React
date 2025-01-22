const express = require("express");
require("./db/config");
const User = require("./db/User");
const cors = require("cors");
const Product = require("./db/Product");
const Jwt = require("jsonwebtoken");

const app = express();
const jwtKey = "e-comm";

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
  Jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
    if (err) {
      res.send({ result: "Something went wrong, Please try after sometime." });
    }
    res.send({ result, auth: token });
  });
});

//login api..
app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          res.send({
            result: "Something went wrong, Please try after sometime.",
          });
        }
        res.send({ user, auth: token });
      });
    } else {
      res.send({ result: "No User Found" });
    }
  } else {
    res.send({ result: "No User Found" });
  }
});

app.post("/add-product", verifyToken, async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result);
});

app.get("/products", verifyToken, async (req, res) => {
  let product = await Product.find();
  if (product.length > 0) {
    res.send(product);
  } else {
    res.send({ result: "No Product Found" });
  }
});

app.delete("/products/:id", verifyToken, async (req, res) => {
  const result = await Product.deleteOne({ _id: req.params.id });
  res.send(result);
});

app.get("/product/:id", verifyToken, async (req, res) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No Result Found" });
  }
});

app.put("/product/:id", verifyToken, async (req, res) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  res.send(result);
});

app.get("/search/:key", verifyToken, async (req, res) => {
  let result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  res.send(result);
});

function verifyToken(req, res, next) {
  let token = req.headers["authorization"];
  if (token) {
    token = token.split(" ")[1];
    Jwt.verify(token, jwtKey,(err, valid)=>{
      if(err){
        res.status(401).send({result : "Please Provide Valid Token"});
      }
      else{
        next();
      }
    });
  } else {
    res.status(403).send({result: "Please Add Token with Headers"});
  }
}

app.listen(5000, () => {
  console.warn("server is running on port 5000");
});
