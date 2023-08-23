import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose, { Mongoose } from "mongoose";
dotenv.config();
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;
const app = express();

app.get("/", (req, res) => {
   res.status(200).send("<h1>welcome</h1>");
});

mongoose.connect(CONNECTION_URL, {}).then(() => {
    app.listen(PORT, () => {
        console.log(`This server running in: http://localhost:${PORT}`);
    });

}).catch((err) => console.log(err.message))
