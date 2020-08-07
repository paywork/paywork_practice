const express = require('express')
const router = express.Router

//Project CRUD API


// project create API
roueter.post('/', (req, res) => {
    const newProject = {
        id: req.body.id, 
        name: req.body.name,
        round: req.body.round,
        createAt: req.body.createAt, 
        completedAt: req.body.completedAt,
        clientid: req.body.clientid
    }

    res.json({
        message: 'project create API'
        projectinfo = newProject
    })
})


// project retrieve API
router.get('/', (req, res) => {
    res.json({
        message: 'project retrieve API'
    })
}


// project update API
router.patch('/', (req, res) => {
    res.json({
        message: 'project update API'
    })
})

// project delete API
router.delete('/', (req, res) => {
    res.json({
        message: 'project delete API'
    })
})




module.exports = router