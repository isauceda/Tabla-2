const express = require('express')
const app = express()

const usuarios = [
    {
        nombre : "Ingrid",
        identidad : "0801198504786"
},
{
    nombre : "Yensi",
    identidad : "0801198504786"
}
];

app.get('', (req, res)=>{
    res.json(usuarios);

});
app.get('/:id', (req, res)=>{

    const indice = req.params.id
    objSeleccionado = usuarios[indice];
    res.json(indice);

});


app.listen(3000)