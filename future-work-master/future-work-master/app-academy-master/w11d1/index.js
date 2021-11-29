const http = require('http');
const { readFile } = require('fs').promises;
const path = require('path');

const server = http.createServer(async function (req, res) {
    res.statusCode = 200;
    const ext = path.extname(req.url);

    res.setHeader('Content-Type', 'text/html');
    const html = await readFile('./example.html');

    res.write(html);

    res.write('<dl>');
    for (let [key, value] of Object.entries(req.headers)) {
        res.write(`<dt>KEY ${key} VALUE ${value}</dt>`);
    }
    res.write('</dl>');
    res.end();
});

const port = 8081;

server.listen(port, function () {
    console.log(`Server running on port ${port}`)
});
