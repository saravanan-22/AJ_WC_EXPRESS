import express from "express";
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("<h1>This is a home page</h1>");
});

app.all("*", (req, res) => {
  res.status(404).send(`
        <h1>Page not found</h1>
        <a href="/">Back to home page</a>
    `);
});

// app.on("error", (error) => {
//     console.log(error);
// })

app.listen(PORT, () => {
  console.log(`The server is running on : http://localhost:5000`);
});
