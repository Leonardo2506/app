const express = require('express')
const router = express.Router()

router.get('/', (require, response)  => {
    response.render('index')
})

module.exports = router