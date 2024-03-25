const express = require('express');
const port = 3500;
const app = express();

app.arguments(express.text())
app.arguments(express.json())
app.arguments(express.urlencoded({extended: false}))

app.post('/user',(req,res)=>{
    console.log(req.body)
    res.send('Nuevo usuario creado')
})

app.listen(port, () => {
    console.log('Server on port ${port}')
});
