const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const fetchuser = require('../midddleware/Fetchuser');
const JWT_SECRET = "i am daxit"

//ROUTE:1 create a user using post:http://localhost:5000/api/auth/createuser
router.post('/createuser', [
  body('email', "enter valid email").isEmail(),
  body('name', "enter valid name").isLength({ min: 3 }),
  body('password', "password must be 5 char").isLength({ min: 5 }),
], async (req, res) => {
  let success = false;
  //if these are error return bad request and the error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({success, errors: errors.array() });
  }

  //chack user with the same email
  try {
    let user = await User.findOne({email: req.body.email })
    if (user) {
      return res.status(400).json({success, errors: "sorry a user with this email" });
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    //create a new user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass
    })

    // .then(user => res.json(user))
    // .catch((err)=>{console.log(err)
    // res.json({error:"please enter unique email"})})

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    // console.log(jwtdata)
    //res.send(user);
    success=true;
    res.send({success, authtoken })
  }
  catch (err) {
    console.error(err)
    res.status(500).send("saame errorfound ")
  }
})

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false
      return res.status(400).json({ error: "Please try to login with correct email" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct password" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//ROUTE 3: Get loged user detail using post:http://localhost:5000/api/auth/getuser  login require
router.post('/getuser', fetchuser , async (req, res) => {
  try {
  const userID=req.user.id;
  const user=await User.findById(userID).select("-password")
  res.send(user)
}
catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server Error");
}
})
module.exports = router