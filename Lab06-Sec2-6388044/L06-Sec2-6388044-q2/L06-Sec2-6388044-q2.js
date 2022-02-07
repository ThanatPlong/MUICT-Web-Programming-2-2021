const http = require("http");
const fs = require("fs");
const path = require("path");

const myServer = http.createServer((req, res) => {
    
    console.log(`Req at: ${req.url}`);

    if (req.url === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.write("Hello World! in plain text");
        res.end(); 
    }
    else if (req.url === "/th") {
        fs.readFile("./greeting_th.html", function(err, data) { 
            res.statusCode = 200; res.setHeader("Content-Type"," text/html");
            res.write(data);
            res.end();
        });
    }
    else if (req.url === "/cn") {
        fs.readFile("./greeting_cn.html", function(err, data) { 
            res.statusCode = 200; res.setHeader("Content-Type"," text/html");
            res.write(data);
            res.end();
        });
    }
    else {
        res.statusCode = 404;
        res.setHeader("Content-Type", " text/plain");
        res.write("Where are you going?");
        res.end();
    }
});

console.log("Running at Port 3030");
myServer.listen(3030);
