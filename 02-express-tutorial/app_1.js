const http = require("http");
const { readFileSync } = require("fs");

// get all
const homePage = readFileSync("./navbar-app/index.html");
const aboutPage = readFileSync("./navbar-app/about.html");
const contactPage = readFileSync("./navbar-app/contact.html");
const projectsPage = readFileSync("./navbar-app/projects.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "content-type": "text/html" });
      res.write(homePage);
      res.end();
      /* res.end(
        `<h1>Welcome to home!</h1>
        <ul>
            <li><a href='/'>home</a></li>
            <li><a href='/about'>about</a></li>
            <li><a href='/contactus'>contact us</a></li>
        </ul>`
      ); */
      break;
    case "/about":
      res.writeHead(200, { "content-type": "text/html" });
      res.write(aboutPage);
      res.end();
      /* res.end(
        `<h1>About page!</h1>
        <ul>
            <li><a href='/'>home</a></li>
            <li><a href='/about'>about</a></li>
            <li><a href='/contactus'>contact us</a></li>
        </ul>`
      ); */
      break;
    case "/contact":
      res.writeHead(200, { "content-type": "text/html" });
      res.write(contactPage);
      res.end();
      /* res.end(
        `<h1>Contact page!</h1>
        <ul>
            <li><a href='/'>home</a></li>
            <li><a href='/about'>about</a></li>
            <li><a href='/contactus'>contact us</a></li>
        </ul>`
      ); */
      break;
    case "/projects":
      res.writeHead(200, { "content-type": "text/html" });
      res.write(projectsPage);
      res.end();
      break;
    case "/styles.css":
      res.writeHead(200, { "content-type": "text/css" });
      res.write(homeStyles);
      res.end();
      break;
    case "/logo.svg":
      res.writeHead(200, { "content-type": "image/svg+xml" });
      res.write(homeImage);
      res.end();
      break;
    case "/browser-app.js":
      res.writeHead(200, { "content-type": "text/javascript" });
      res.write(homeLogic);
      res.end();
      break;
    default:
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h2>Page not found!</h2>");
      res.end();
      /* res.end(
        `<h1>Something went wrong!</h1>
        <a href='/'>Home</a>`
      ); */
      break;
  }
});

server.listen(3000, () => console.log("Server listen..."));
