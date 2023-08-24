import User from "../models/User.js";

//createUser
export const createUser = (req, res) => {
  new User(req.body)
    .save()
    .then((user) =>
      res.status(201).json({ message: "User creates successfully", data: user })
    )
    .catch((err) => console.log(err));
};
//--------------------------------------------------------------------------------------------------------------
//getAllUsers
export const getAllUsers = (req, res) => {};
//--------------------------------------------------------------------------------------------------------------
//getSingleUser
export const getSingleUser = (req, res) => {};
//--------------------------------------------------------------------------------------------------------------
//updateUser
export const updateUser = (req, res) => {};
//--------------------------------------------------------------------------------------------------------------
//deleteUser
export const deleteUser = (req, res) => {};
