import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Express</h1>`);
});

app.get("/about", (req,res) => {
    res.send(`<h1>Welcome ot Express about page</h1>`)
})

app.listen(5000, () => {
  console.log(`Server is running in : http://localhost:5000`);
});
