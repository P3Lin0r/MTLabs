const PORT = 3000;
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
        res.end('Привіт, світ!');
    }
    else {
        res.writeHead(405, { 'content-type': 'text/plain; charset=utf-8' })
    }
});

server.listen(PORT, () => {
    console.log(`Сервер запущено: http://localhost:3000`);
});