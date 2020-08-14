const express = require('express')
const router = express.Router()


// 지금부터 approve  CRUD


// approve create api

// http://localhost:1111/approve 이 기본 설정

router.post('/',(req, res) => {
    const newApprove = {
        id: req.body.id,
        round: req.body.round,
        message: req.body.message,
        url: req.body.url,
        joinAt: req.body.joinAt,
        processAt: req.body.processAt,
        reason: req.body.reason,
        projectid: req.body.projectid,
        reporterid: req.body.reporterid
    }

    res.json({
        message: 'approve create API',
        approveinfo: newApprove
    })
})

// approve retrieve api
router.get('/',(req, res) =>{
    res.json({
        message: 'approve retrieve API'
    })
})


// approve update api
router.patch('/',(req, res) => {
    res.json ({
        message: 'approve update API'
    })
})


// approve delete api
router.delete('/',(req, res) => {
    res.json({
        message: 'approve delete API'
    })
})




module.exports = router