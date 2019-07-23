const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const jwt = require('jsonwebtoken')

const keys = require('../config/keys')

// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  const errors = {}
  User.findOne({
      email: req.body.email
    }).then(user => {
      if (user) {
        errors.email = 'Email already exists'
        return res.status(400).json(errors)
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err))
          })
        })
      }
    })
    .catch(err => console.log(err))
})

// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
  const errors = {}
  const email = req.body.email
  const password = req.body.password

  // Find user by email
  User.findOne({
    email
  }).then(user => {
    // Check for user
    if (!user) {
      errors.email = 'User not found'
      return res.status(404).json(errors)
    }

    // Check Password
    bcrypt.compare(password, user.password)
      .then(isMatch => {
        if (isMatch) {
          // User Matched
          const payload = {
            id: user.id,
            name: user.name
          } // Create JWT Payload
          console.log(payload)
          console.log(keys.secretOrKey)

          // Sign Token
          var token = jwt.sign(payload, keys.secretOrKey, {
            expiresIn: 3600
          })
          res.json({
            success: true,
            token: 'Bearer ' + token
          })

        } else {
          errors.password = 'Password incorrect'
          return res.status(400).json(errors)
        }
      })
      .catch(err => res.json(err))
  })
})

// @desc    User profile
// @access  Public
router.get(
  '/profile',
  (req, res) => {
    const token = req.headers.authorization.split(' ')[1] || req.headers['authorization'].split(' ')[1]
    if (!token) {
      return res.status(403)
    }
    jwt.verify(token, keys.secretOrKey, function(err, decoded) {
      if (err) {
          return res.status(401).json({"error": true, "message": 'Unauthorized access.' });
      }
      return res.json(decoded)
  });
  }
)

module.exports = router