const path = require('path')
const express = require('express')

const app = express()

const publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory))

app.get('/weather', (req, res) => {
    res.send('Weather app !')
})

app.listen(3000, () => {
    console.log('server started on port 3000')
})