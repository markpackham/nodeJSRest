// Vanilla Node.js Rest API learned from https://www.youtube.com/watch?v=_1xa8Bsho6A
const http = require("http");
const { getProducts } = require("./controllers/productController");

const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "text/html");
  // res.write("<h1>Hello World</h1>");
  // res.end();

  if (req.url === "/api/products" && req.method === "GET") {
    getProducts(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

// check is there is an environment variable before using Port 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
