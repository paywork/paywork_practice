const express = require('express')
const router = express.Router()


// Invite CRUD


// invite create API
router.post('/',(req, res) => {
  const newInvite = {
      token: req.body.token,
      phone: req.body.phone,
      joinAt: req.body.joinAt,
      inviteAt: req.body.inviteAt,
      proejctid: req.body.projectid, 
      inviterid: req.body.inviterid
  }
  res.json({
      message: 'invite create API',
      inviteinfo: newInvite
  })
})


// invite retrieve API
router.get('/',(req, res) => {
    res.json({
        message: 'invite retrieve API'
    })
})


// invite update API
router.patch('/',(req, res) => {
    res.json({
        message: 'invite update API'
    })
})


// invite delete API
router.delete('/',(req, res) => {
    res.json({
        message: 'order delete API'
    })
})


modules.experts = router