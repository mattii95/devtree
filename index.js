import express from 'express'

const app = express();

// Routing
app.get('/', (req, res) => {
    res.send('Hello world in Express');
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('servidor funcionando en el puerto: ', port);
});