const express = require('express')
const usercontrol = require('../controllers/usercontroller')

const router = express.Router()

router.get('/', usercontrol.getallbooks)
router.get('/:code', usercontrol.getbookbycode)

module.exports = router
