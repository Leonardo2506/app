const express = require('express')
const app = express()
const port = process.env.PORT || 3000 

app.use('/alumno', require ('./endpoints/alumno.endpoint')) 
app.use('/', require ('./endpoints/index.endpoint')) 

app.set('views', './views')
app.set('view engine' , 'ejs')

app.listen(port, () => {
    console.log(`App running on ${port}`)
})