const express = require('express')
const router = express.Router

// Policy CRUD API


// Policy create API
roueter.post('/', (req, res) => {
    const newPolicy = {
        name: req.body.name, 
        title: req.body.title,
        createAt: req.body.createAt, 
        updateAt: req.body.updateAt,
        contents: req.body.contents
    }

    res.json({
        message: 'policy create API'
        policyinfo = newPolicy
    })
})


// Policy retrieve API
router.get('/', (req, res) => {
    res.json({
        message: 'policy retrieve API'
    })
}


// Policy update API
router.patch('/', (req, res) => {
    res.json({
        message: 'policy update API'
    })
})

// Policy delete API
router.delete('/', (req, res) => {
    res.json({
        message: 'policy delete API'
    })
})


module.exports = router