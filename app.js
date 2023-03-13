const express = require('express');

const User = require('./models/Users');
const app = express();

app.use(express.json())

app.get('/', async (req, res) => {
    res.send('Página inicial')
});

app.post('/cadastrar', async (req, res) => {
    const { name, email } = req.body
    await User.create({ name, email })
    res.send('testsdsadsae')
})

app.listen('3030', () => {
    console.log('Conectado')
});