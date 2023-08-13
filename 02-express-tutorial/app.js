import express from "express";

const people = require("./routes/people");

const app = express();

// static assets
app.use(express.static("./methods-public"));

// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use("/api/people", people);

// POST FORM ACTION
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name)
    return res
      .status(201)
      .send(`Welcome ${name.replace(/^[a-z]/, (a) => a.toUpperCase())}`);
  res.status(401).send(`Please Provide Credentials.`);
});

app.listen(3000, (error) => {
  error
    ? console.log(`Server Error: ${error}`)
    : console.log("Server OK! Port: 3000...");
});
