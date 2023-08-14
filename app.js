const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    //process.exit()
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>my first page</title></head>')
    res.write('<body><h1>Hello from my node.js server!</h1></body>')
    res.write('</head>')
});

server.listen(PORT)