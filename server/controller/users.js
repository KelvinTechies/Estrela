import userModel from "../models/Users.js";
import generateToken from "../utils/generateToken.js";

const register = async (req, res) => {
  const { fullname, email, username, password } = req.body;
  let user = "";
  try {
    if (!fullname || !username || !email || !password) {
      res.status(401).json({ message: "All Fields are required", status: 403 });
      return;
    } else {
      user = await userModel.findOne({ email });
      if (user) {
        res.status(404).json({ message: "user Already exists", status: 404 });
        return;
      } else {
        user = await userModel.create({ fullname, username, email, password });
        res.status(201).json({ message: "user created", status: 201, user });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(401).json({ message: "All Fields are required", status: 403 });
      return;
    }
    const newuser = await userModel.findOne({ email });

    if (newuser) {
      const user = await newuser.comparePwd(password);
      if (user) {
        generateToken(res, newuser._id);
        res.status(200).json(newuser);
      } else {
        res
          .status(403)
          .json({ message: "User does not exist or Worng password" });
      }
    } else {
      res.status(403).json({ message: "User does not exist" });
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req, res) => {
  const id = req.user;
  console.log(id);

  try {
    const user = userModel.findById(id);
    if (user) {
      res.status(200).json({ user, success: "success" });
    } else {
      res.json({ msg: "no id found for this user" });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  const { fullname, email, username } = req.body;
  const id = req.user._id;
  if (!fullname || !username || !email) {
    res.status(401).json({ message: "All Fields are required", status: 403 });
    return;
  } else {
    const user = await userModel.findByIdAndUpdate(id, req.body, { new: true });

    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(401).json({ msg: "could not update this user" });
    }
  }
};

const deleteUser = async (req, res) => {
  const id = req.user._id;

  try {
    const user = await userModel.findByIdAndDelete(id);
    if (user) {
      res.status(200).json({ success: "User  deleted successfully " });
    } else {
      res.status(401).json({ msg: "could not delete this user" });
    }
  } catch (error) {
    console.log(error);
  }
};

const logout = async (req, res) => {
  res.cookie("myToken", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: " User Logged out", status: 200 });
};

export { register, login, getUser, updateUser, deleteUser, logout };
