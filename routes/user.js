const express = require('express')
const router = express.Router

// User CRUD

// user create API
roueter.post('/', (req, res) => {
    const newUser = {
        id: req.body.id, 
        username: req.body.username,
        phone: req.body.phone, 
        email: req.body.email,
        signupAt: req.body.signupAt,
        loginAt: req.body.loginAt,
        admin: req.body.admin
    }

    res.json({
        message: 'user create API'
        userinfo = newUser
    })
})


// user retrieve API
router.get('/', (req, res) => {
    res.json({
        message: 'user retrieve API'
    })
}


// user update API
router.patch('/', (req, res) => {
    res.json({
        message: 'user update API'
    })
})

// user delete API
router.delete('/', (req, res) => {
    res.json({
        message: 'user delete API'
    })
})


module.exports = router