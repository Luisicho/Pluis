const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;

app.get('/api', (req,res) => {
    res.json({'users': ['uno','dos','tres']})
})

app.listen(PORT,() => {
    console.log(`Server start on http://localhost:${PORT}`)
})