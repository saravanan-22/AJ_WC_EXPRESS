import express from "express";
import users from "./data.js";
const app = express();
const PORT = 5000;


app.use(express.json());  // This middleware will parse incoming JSON data and make it accessible through req.body. After making this change, your route should be able to access and log the request body correctly.



//http methods
app.get("/", (req, res) => {
    try {
        res.status(200).send("<h1>request-methods</h1>");
    } catch (error) {
        console.log(error.message);
    }
 
});

//http://localhost:5000/api/v1/users  --all users

app.get("/api/v1/users", (req, res) => {
    try {
        res.status(200).json({ message: "success", data: users }); 
    } catch (error) {
        console.log(error.message);
    }

});

// http://localhost:5000/api/v1/users/:id  --singleUser

app.get("/api/v1/users/:id", (req, res) => {
    try {
        const { id } = req.params;
        const singleUser = users.find((user) => user.id === +id);
        !singleUser
          ? res.status(200).send(`<h1>no user found this id : ${id}</h1>`)
          : res.status(200).json({ message: "success", data: singleUser });
    } catch (error) {
        console.log(error.message);
    }
 
});

// http://localhost:5000/api/v1/users/create     --post method


app.post("/api/v1/users/create", (req,res)=> {
    try {
        console.log(req.body); 
        res.status(201).json({message : "user created successfully" , data : req.body});
    } catch (error) {
        console.log(error.message); 
    }
 
})


//listen
app.listen(5000, () => {
  console.log(`<h1>This server is running in: http://localhost:${5000}`);
});
