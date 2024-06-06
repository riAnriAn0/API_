const express = require('express');
const db = require('./src/data/db.json');
const server = express();
const port = 3001;

server.get('/',(req, res) => {
    return res.json(db)
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})
