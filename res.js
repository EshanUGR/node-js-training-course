// console.log('express tutorial');

const http = require("http");

const { readFileSync } = require("fs");

const homePage = readFileSync("./index.html");
const server = http.createServer((req, res) => {
  console.log(req.url);
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write("<h1>home page code pro raivindu eshan</h1>");

    res.end();
  }

  if (url === "/about") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write("<h1>About page code pro raivindu eshan</h1>");

    res.end();
  } else {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write("<h1> page not found code pro raivindu eshan</h1>");

    res.end();
  }
});

server.listen(5000);
