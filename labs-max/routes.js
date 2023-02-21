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
                  '<body><form action="/create-user" method="POST" class="form-group"><div class="container"><input type="text" id="inputAppender" class="form-control" name="username" Placeholder="Username"></input><button type="submit" class="btn btn-primary mt-5">REGISTER</button></div></form></body>'
                );
                res.write("</html>");
                res.end();
            }, 2000)

        }, 1000)


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
              "<body><form action='/' method='POST' class='form-group'><div class='container'><div id='parent'><h2 class='display-2 mt-5'>User Created!</h2><h1 class='display-1'></h1><button class='btn btn-secondary' type='submit'> BACK</button></div></div></form><form action='/users' method='POST' class='form-group'><div class='container'><button class='btn btn-secondary' type='submit'>User List</button></div></form></body>"
            );
            res.write("</html>");
            clearInterval(intervalName);

             res.end();
        }, 5000)
    }
    if (url === "/users") {
      console.log("Route = /users");

      setTimeout(() => {
        console.log("Retrieving response");
        setTimeout(() => {
          console.log("Response delivered in Users");
          res.write("<html>");
          res.write(
            '<head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></head>'
          );
          res.write(
            "<body><form action='/' method='POST' class='form-group'><div class='container'><div id='parent'><h2 class='display-2 mt-5'>Users</h2><ul id='father'><li>D User1</li><li>D User2</li><li>D User3</li></ul></div></div><script>const userList = document.getElementById('father'); const data = []; for(let i = 0; i < data.length; i++) {const li = document.getElementById('inputAppender'); li.value = data[i]; userList.appendChild(li)} </script></body>"
          );
          res.write("</html>");
          res.end();
        }, 2000);
      }, 5000);
    }
    // if (url === "/create-user") {
    //   const body = [];
    //   res.on('data', (user) => {
    //     body.push(user)
    //   });
    //   res.on('end', () => {
    //     const parsed = Buffer.concat(body).toString();
    //     console.log(parsed.split('=')[1]);
    //   });
    //   res.statusCode = 302;
    //   res.setHeader('Location', '/');
    //   return res.end();
    // }



}


exports.handler = reqHandler;