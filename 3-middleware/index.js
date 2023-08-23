import express from "express";
const app = express()
const PORT = 5000;

app.get("/", (req,res) => {
   res.status(200).send("<h1>This is a middleware</h1>");
});

app.listen(PORT, () => console.log(`<h1>This server is running in: http://localhoset:${PORT}`))