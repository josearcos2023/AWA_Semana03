const express = require('express')
const port = 3500
const app = express()

app.length('/hello/:username', (req, res)=>{
    //console.log(req.params)
    console.log(typeof req.params.username)
    res.send(`Hello ${req.params.username.toUpperCase()}`)
})

app.get('/add/:x/:y',(req,res)=>{
    const {x, y} = req.params
    res.send(`Result: ${ parseInt(x) + parseInt(y)}`)
})

app.get('/user/:username/photo', (req,res) => {
    if(req.params.username.toUpperCase() === "JOSE"){
        return res.sendFile('./arquitectura.png', {
            root: __dirname
        })
    }
    res.send('El usuario no tiene acceso......!!!')
})

app.get('/name/:name/age/:age', (req,res) => {
    res.send(`El usuario ${req.params.name} tiene ${req.params.age} años...!!!`)
})

app.listen(port, () => {
    console.log(`Server on port ${port}`)
});
