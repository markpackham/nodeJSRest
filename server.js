// Vanilla Node.js Rest API learned from https://www.youtube.com/watch?v=_1xa8Bsho6A
const http = require("http");
const products = require("./data/products");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello World</h1>");
  res.end();
});

// check is there is an environment variable before using Port 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
