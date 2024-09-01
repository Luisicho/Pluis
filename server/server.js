const express = require('express')
const multer = require('multer')
const app = express()
const PORT = process.env.PORT || 5000;

const upload = multer({dest:'uploads/'})

app.post('/images/single',upload.single('imagenPerfil'),(req,res) =>{
    console.log(req.file);
    res.send('Termino Imagen Function');
})

app.get('/api', (req,res) => {
    res.json({'users': ['uno','dos','tres']})
})

app.listen(PORT,() => {
    console.log(`Server start on http://localhost:${PORT}`)
})