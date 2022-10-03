const router = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const { find } = require('../models/user')

//REGISTER
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body

  try {
    const existUser = await User.findOne({ email })

    if (existUser) {
      res.status(400).json('user already exist')
    } else {
      // secure password
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)

      const user = await User.create({
        username,
        email,
        password: hashedPassword,
      })
      res.status(200).json(user)
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

/////LOGIN

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    !user && res.status(404).send('user not found!')

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json('wrong password')

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
})
module.exports = router
