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
