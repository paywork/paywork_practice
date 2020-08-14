const express = require('express')
const router = express.Router()


//Session CRUD



//session create API
router.post('/', (req,res) => {
    const newSession = {
        accessToken: eq.body.accessToken,
        platform: req.body.platform,
        loginAt: req.body.loginAt,
        usageAt: req.body.usageAt,
        userid: req.body.userid
    }

    res.json({
        message: 'session update API',
        sessioninfo: newSession
    })
})

//session retrieve API
router.get('/', (req, res) => {
    res.json({ 
        message: 'session retrieve API'
    })
})

//session update API
router.patch('/', (req, res) => {
    res.json({
        message: 'session update API'
    })
})

//session delete API
router.delete('/', (req, res) => {
    res.json({
        message: 'session delete API'
    })
})


module.exports = router