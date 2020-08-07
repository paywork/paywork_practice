const express = require('express')
const router = express.Router

//Subscribe CRUD


// subscribe create API
roueter.post('/', (req, res) => {
    const newSubscribe = {
        id: req.body.id, 
        username: req.body.username,
        company: req.body.company,
        phone: req.body.phone, 
        email: req.body.email,
        description: req.body.description,
        createAt: req.body.createAt
    }

    res.json({
        message: 'subscribe create API'
        subscribeinfo = newSubscribe
    })
})


// subscribe retrieve API
router.get('/', (req, res) => {
    res.json({
        message: 'subscribe retrieve API'
    })
}


// subscribe update API
router.patch('/', (req, res) => {
    res.json({
        message: 'subscribe update API'
    })
})

// subscribe delete API
router.delete('/', (req, res) => {
    res.json({
        message: 'subscribe delete API'
    })
})


module.exports = router