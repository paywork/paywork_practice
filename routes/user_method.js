const express = require('express')
const router = express.Router()

// user_method_method CRUD

// user_method_method create API
router.post('/', (req, res) => {
    const newUser_method = {
        id: req.body.id, 
        userid: req.body.userid,
        provider: req.body.provider,
        identidy: req.body.idientity
    }

    res.json({
        message: 'user_method create API',
        user_methodinfo: newUser_method
    })
})


// user_method retrieve API
router.get('/', (req, res) => {
    res.json({
        message: 'user_method retrieve API'
    })
})


// user_method update API
router.patch('/', (req, res) => {
    res.json({
        message: 'user_method update API'
    })
})

// user_method delete API
router.delete('/', (req, res) => {
    res.json({
        message: 'user_method delete API'
    })
})



module.exports = router