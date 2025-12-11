import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hola Express - GET');
});

app.post('/', (req, res) => {
    res.send('Hola Express - POST');
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));