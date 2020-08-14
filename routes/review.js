const express = require('express')
const router = express.Router()

//Review CRUD


// review create API
router.post('/', (req, res) => {
    const newReview = {
        id: req.body.id, 
        userid: req.body.userid,
        message: req.body.message,
        createAt: req.body.createAt
    }

    res.json({
        message: 'review create API',
        reviewinfo: newReview
    })
})


// review retrieve API
router.get('/', (req, res) => {
    res.json({
        message: 'review retrieve API'
    })
})


// review update API
router.patch('/', (req, res) => {
    res.json({
        message: 'review update API'
    })
})

// review delete API
router.delete('/', (req, res) => {
    res.json({
        message: 'review delete API'
    })
})



module.exports = router