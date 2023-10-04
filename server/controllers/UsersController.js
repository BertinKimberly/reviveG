import asyncHandler from "express-async-handler";
import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../middlewares/Auth.js";

//controllers
export const registerUser = asyncHandler(async (req, res) => {
   const { fullName, email, password, image } = req.body;
   try {
      const userExists = await User.findOne({ email });

      if (userExists) {
         res.status(400);
         throw new Error("User already exists");
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      //create user

      const user = await User.create({
         fullName,
         email,
         password: hashedPassword,
         image,
      });
      if (user) {
         res.status(201).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            image: user.image,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
         });
      } else {
         res.status(400);
         throw new Error("Invalid user data");
      }
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

export const loginUser = asyncHandler(async (req, res) => {
   const { email, password } = req.body;

   try {
      const user = await User.findOne({ email });

      if (user && bcrypt.compare(password, user.password)) {
         res.json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            image: user.image,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
         });
      } else {
         res.status(401);
         throw new Error("Invalid email or password");
      }
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

// ********************PRIVATE CONTROLLERS************************

export const updateUser = asyncHandler(async (req, res) => {
   const { fullName, email, image } = req.body;

   try {
      const user = await User.findById(req.user._id);

      if (user) {
         user.fullName = fullName || user.fullName;
         user.email = email || user.email;
         user.image = image || user.image;

         const updatedUser = await user.save();

         res.json({
            _id: updatedUser._id,
            fullName: updatedUser.fullName,
            email: updatedUser.email,
            image: updatedUser.image,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
         });
      } else {
         res.status(404).json({ message: error.message });
      }
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});
