const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');

router.post('/createuser', [
  body('email', "enter valid email").isEmail(),
  body('name', "enter valid name").isLength({ min: 3 }),
  body('password', "password must be 5 char").isLength({ min: 5 }),
], async (req, res) => {
  //if these are error return bad request and the error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //chack user with the same email
  try {
    let user = await User.findOne({ email: req.body.email })
    if (user) {
      return res.status(400).json({ errors: "sorry a user with this email" });
    }
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })

    // .then(user => res.json(user))
    // .catch((err)=>{console.log(err)
    // res.json({error:"please enter unique email"})})
    res.send(user);
  }
  catch (err) {
    console.error(err.massage)
    req.status(500).send("saame errorfound ")
  }
})
module.exports = router