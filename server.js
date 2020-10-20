// Vanilla Node.js Rest API learned from https://www.youtube.com/watch?v=_1xa8Bsho6A
const http = require("http");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("./controllers/productController");

const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "text/html");
  // res.write("<h1>Hello World</h1>");
  // res.end();

  if (req.url === "/api/products" && req.method === "GET") {
    getProducts(req, res);
  } else if (
    // use a regular expression to check for specific ids
    // eg http://localhost:5000/api/products/1
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === "GET"
  ) {
    const id = req.url.split("/")[3];
    getProduct(req, res, id);
  } else if (req.url === "/api/products" && req.method === "POST") {
    createProduct(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === "PUT"
  ) {
    const id = req.url.split("/")[3];
    updateProduct(req, res, id);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === "DELETE"
  ) {
    const id = req.url.split("/")[3];
    deleteProduct(req, res, id);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

// check is there is an environment variable before using Port 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
