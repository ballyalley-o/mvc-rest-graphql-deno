const fs = require("fs");

const reqHandler = (req, res) => {
    const url = req.url;
    const method = req.method;


    if ( url === "/" ) {
        console.log('Request Sent')
        console.log('Route = "/"')

        setTimeout(() => {
            console.log("Retrieving response");
            setTimeout(() => {
                console.log('Response delivered')
                res.write("<html>");
                res.write(
                  '<head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></head>'
                );
                res.write(
                  '<body><div class="container"><h1 class="display-1">Hi!, Welcome!</h1></div></body>'
                );
                res.write(
                  '<body><form action="/create-user" method="POST" class="form-group"><div class="container"><input type="text" class="form-control" name="username" Placeholder="Username"></input><button type="submit" class="btn btn-primary mt-5">REGISTER</button></div></form></body>'
                );
                res.write("</html>");
                res.end();
            }, 2000)

        }, 1000)


    }
    if (url === "/users") {
        console.log('Route = /users');

        setTimeout(() => {
             console.log("Retrieving response");
             setTimeout(() => {
                console.log('Response delivered in Users')
                res.write("<html>");
                res.write(
                  '<head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></head>'
                );
                res.write(
                  "<body><div class='container'><div id='parent'><h2 class='display-2 mt-5'>Users</h2><ul><li>D User1</li><li>D User2</li><li>D User3</li></ul></div></div></body>"
                );
                res.write("</html>");
                res.end();
             }, 2000)

        }, 5000)

    }

    if (url === "/create-user") {
        console.log("Route = /create-user")

        const intervalFunc = () => {
            console.log("Creating a user... Hold on");
        }

        const intervalName = setInterval(intervalFunc, 1000)

        setTimeout(() => {
            console.log("User created!");
            res.write("<html>");
            res.write(
              '<head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></head>'
            );
            res.write(
              "<body><div class='container'><div id='parent'><h2 class='display-2 mt-5'>User Created!</h2><h1 class='display-1'>😎</h1></div></div></body>"
            );
            res.write("</html>");

            clearInterval(intervalName);
            res.end();
        }, 5000)

    }


    // if (url === "/users" && method === "POST") {
    //
    //     const users = [];

    //     return req.on("data", (user) => {
    //         console.log(user)
    //          res.write("<html>");
    //          res.write(
    //            '<head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></head>'
    //          );
    //           res.write("</html>");
    //         const reqUser = res.write('<ul><li>User 1</li></ul>')
    //         users.push(reqUser);
    //     })

    // }

}


exports.handler = reqHandler;