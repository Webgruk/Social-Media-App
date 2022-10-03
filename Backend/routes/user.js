const router = require('express').Router()
const User = require('../models/user')

//update user

router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(req.body.password, salt)
      } catch (error) {
        res.status(500).json(err)
      }
    }

    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })
      res.status(200).json('updated successfully')
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    return res.status(403).json('you can update only your account')
  }
})

//delete user
router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id)
      res.status(200).json('acc deleted successfully')
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    return res.status(403).json('you can delete only your account')
  }
})

//get a user

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    const { password, updatedAt, ...others } = user._doc
    res.status(200).json(others)
  } catch (error) {
    res.status(500).json(err)
  }
})

//follow

router.put('/:id/follow', async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const userToFollow = await User.findById(req.params.id)
      const currentUser = await User.findById(req.body.userId)
      if (!userToFollow.followers.includes(req.body.userId)) {
        await userToFollow.updateOne({ $push: { followers: req.body.userId } })
        await currentUser.updateOne({ $push: { followings: req.params.id } })
        res.status(200).json('user is followed')
      } else {
        res.status(403).json('already following')
      }
    } catch (error) {
      res.status(403).json(error)
    }
  } else {
    res.status(403).json("you can't follow yourself")
  }
})

//unfollow

router.put('/:id/unfollow', async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const userToFollow = await User.findById(req.params.id)
      const currentUser = await User.findById(req.body.userId)
      if (userToFollow.followers.includes(req.body.userId)) {
        await userToFollow.updateOne({ $pull: { followers: req.body.userId } })
        await currentUser.updateOne({ $pull: { followings: req.params.id } })
        res.status(200).json('user is unfollowed')
      } else {
        res.status(403).json('already unfollowing')
      }
    } catch (error) {
      res.status(403).json('already unfollowing')
    }
  } else {
    res.status(403).json("your can't unfollow yourself")
  }
})
module.exports = router
