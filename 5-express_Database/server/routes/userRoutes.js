import express from "express";
const router = express.Router();
import {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

//create user  Post - http://localhost:5000/api/v1/users/create
router.post("/create", createUser);

//----------------------------------------------------------------------------------------------------------------
//getAll user // GET - http://localhost:5000/api/v1/users
router.get("./getAllUsers", getAllUsers);

//----------------------------------------------------------------------------------------------------------------
//getSingle user // GET - http://localhost:5000/api/v1/users/:id
router.get("./:id", getSingleUser);

//----------------------------------------------------------------------------------------------------------------
//update user // Put - http://localhost:5000/api/v1/users/:id
router.put("./:id", updateUser);

//----------------------------------------------------------------------------------------------------------------
//delete user // delete - http://localhost:5000/api/v1/users/:id
router.delete("./:id", deleteUser);

// export
export default router;
