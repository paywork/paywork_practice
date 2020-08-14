const express = require('express')
const router = express.Router()


// MILESTONE CRUD API


// milestone create API
router.post('/', (req, res) => {
    const newMilestone = {
        id: req.body.id,
        round: req.body.round,
        amount: req.body.amount,
        createAt: req.body.createAt,
        isSafeTransfer: req.body.isSafeTransfer,
        paymentDate: req.body.paymentDate,
        isUnused: req.body.isUnused,
        projectid: req.body.projectid

    }

    res.json({
        message: "milestone creat API",
        milestoneinfo: newMilestone
    })
})


// milestone retrieve APi
router.get('/',(req, res) => {
    res.json({
        message: 'milestone retrieve API'
    })

})

// milestone update API
router.patch('/',(req, res) => {
    res.json({
        message: 'milestone update API'
    })
})

// milestone delete API
router.delete('/',(req, res) => {
    res.json({
        message: 'milestone delete API'
    })
})


module.exports = router