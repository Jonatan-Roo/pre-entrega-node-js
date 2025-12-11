import http from 'http';

const server = http.createServer((req, res) => {
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hola desde HTTP");
});

const PORT = 3000;

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));