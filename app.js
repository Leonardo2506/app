const express = require('express')
const app = express()
const port = 3000 

app.use('/alumno', require ('./endpoints/alumno.endpoint')) 

app.listen(port, () => {
    console.log(`App running on ${port}`)
})