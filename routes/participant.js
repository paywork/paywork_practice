const express = require('express')
const router = express.Router()


// Participant CRUD


// participant create API
router.post('/',(req, res) => {
    const newParticipant = {
        id: req.body.id,
        jointAt: req.body.joinAt,
        projectid: req.body.projectid,
        userid: req.body.userid, 
        inviterid: req.body.inviterid
    }

    res.json({
        message: 'particiant create API',
        participantinfo: newParticipant
    })
})

// participant retrieve API
router.get('/', (req, res) => {
    res.json({
        message: 'participant retrieve API'
    })

})

// participant update APi
router.patch('/', (req, res) => {
    res.json({
        message: 'participant update API'
    })
})

// participant delete API
router.delete('/', (req, res) => {
    res.json({
        message: 'participant delete API'
    })
})


module.exports = router