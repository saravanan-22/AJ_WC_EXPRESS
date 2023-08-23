import express from "express";
import { products, users } from "./data.js";

const PORT = 5000;
const app = express();

//http://localhose:5000  Base URL

app.get("/", (req, res) => {
  res.status(200).send("<h1>This is a homepage</h1>");
});

// http://localhost:5000/api/products

// app.get("/api/products" ,(req, res) => {
//     res.status(200).json({message: "success", data : products});
// });
//
// Minimum details
app.get("/api/products", (req, res) => {
  let newProducts = products.map(({id, title, price, category, image}) => {
    return { id, title,price, category, image };
  });
  res.status(200).json(newProducts);
});

// http://localhost:5000/api/products-details

app.get("/api/products-details" ,(req, res) => {
    res.status(200).json({message: "success", data : products});
});

// Minimum details

//http://localhost:5000/api/users

app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});


// params  http://localhost:5000/api/products/:id

app.get("/api/products/:id",(req, res)=> {
    // console.log(req.params);             // to identify the id
    const {id} = req.params
    let singleProducts = products.find((product) => product.id === Number(id));
    if(!singleProducts){
        res.status(400).send(`<h1>Product not found this id:${id}</h1> 
        <a href="/api/products-details">Click here to go for all product-detail page`)
    }
    res.status(200).json(singleProducts);
})

// query http://localhost:5000/api/products/:id/?category&limit=3


app.listen(PORT, () => {
  console.log(`<h1>This server is running in: http://localhost:${PORT}</h1>`);
});
