const http = require("http");

const myServer = http.createServer((req, res) => {
    console.log("URL Hit:", req.url);

    res.setHeader("Content-Type", "text/plain");

    if (req.url === "/home") {
        res.write("Welcome to Home Page");
    } else if (req.url === "/info") {
        res.write("This is Info Page");
    } else {
        res.write("Page Not Found");
    }

    res.write("\nTime: " + new Date().toLocaleTimeString());
    res.end();
});

myServer.listen(3000, () => {
    console.log("Server started on port 3000");
});