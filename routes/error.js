const express = require('express')
const router = express.Router()

// 지금부터 error  CRUD


// error create api
router.post('/',(req,res) => {
    const newError = {
        supportid: req.body.supportid,
        username: req.body.username,
        company: req.body.company,
        phone: req.body.phone,
        email: req.body.email,
        description: req.body.description,
        createAt: req.body.createAt
    }

    res.json({
        message: 'error create API',
        errorinfo: newError
    })
})

// error retrieve api
router.get('/',(req, res) =>{
    res.json({
        message: 'error retrieve API'
    })
})


// error update api
router.patch('/',(req, res) => {
    res.json ({
        message: 'error update API'
    })
})


// error delete api
router.delete('/',(req, res) => {
    res.json({
        message: 'error delete API'
    })
})




module.exports = router
