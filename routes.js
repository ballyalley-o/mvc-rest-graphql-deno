const fs = require("fs");


const reqHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
      res.write("<html>");
      res.write(
        '<head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></head>'
      );
      res.write(
        `<body><form action="/message" method="POST"><div class="container"><h1>Hi! send message</h1><input type="text" name="message"><button class="btn btn-primary" type="submit">SEND</button></div></form></body>`
      );
      res.write("</html>");
      return res.end();
    }
    if (url === "/message" && method === "POST") {
      const body = [];
      req.on("data", (bs) => {
        console.log(bs);
        body.push(bs);
      });
      return req.on("end", () => {
        const parsed = Buffer.concat(body).toString();
        const message = parsed.split("=")[1];
        fs.writeFileSync("message.txt", message, (err) => {
          res.statusCode = 302;
          res.setHeader("Location", "/");

        });
      });
    }
    console.log("Request received");
    console.log(req["url"]);
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write(
      '<head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></head>'
    );
    res.write(
      `<div class="container"><div><div class="col-12 m-5"><h1>Something</h1><div id="parent"></div></div></div></div>`
    );
    res.write("</html>");
    console.log("End of request");
    res.end();
}


exports.handler = reqHandler;