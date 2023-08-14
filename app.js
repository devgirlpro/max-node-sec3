const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><form method="POST" action="message"><input type="text" name=""message><button type="submit">Send</button></form></body>')
        res.write('</head>')
        return res.end();
    }
    //process.exit()
    if (url === '/message' && method === 'POST')
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>my first page</title></head>')
    res.write('<body><h1>Hello from my node.js server!</h1></body>')
    res.write('</head>')
});

server.listen(PORT)