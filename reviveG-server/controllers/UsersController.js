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

export const deleteUserProfile = asyncHandler(async (req, res) => {
   try {
      const user = await User.findById(req.user._id);

      if (user) {
         if (user.isAdmin) {
            return res.status(400).json({ message: "Can't delete admin user" });
         }
         const deletedUser = await User.findByIdAndDelete(req.user._id);
         return res
            .status(200)
            .json({ message: `${deletedUser.fullName} deleted successfully` });
      } else {
         return res.status(404).json({ message: "User not found" });
      }
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

export const changePassword = asyncHandler(async (req, res) => {
   const { oldPassword, newPassword } = req.body;

   try {
      const user = await User.findById(req.user._id);
      if (user && (await bcrypt.compare(oldPassword, user.password))) {
         const salt = await bcrypt.genSalt(10);
         const hashedPassword = await bcrypt.hash(newPassword, salt);
         user.password = hashedPassword;

         await user.save();
         return res.status(200).json({ message: "Password changed" });
      } else {
         return res.status(401).json({ message: "Invalid old password" });
      }
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

export const getLikedMovies = asyncHandler(async (req, res) => {
   try {
      const user = await User.findById(req.user._id).populate("likedMovies");

      if (user) {
         res.json(user.likedMovies);
      } else {
         res.status(404);
         throw new Error("User not found");
      }
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

export const addLikedMovie = asyncHandler(async (req, res) => {
   const { movieId } = req.body;
   try {
      const user = await User.findById(req.user._id);

      if (user) {
         if (user.likedMovies.includes(movieId)) {
            res.status(400);
            throw new Error("Movie already liked");
         }
         user.likedMovies.push(movieId);
         await user.save();
         res.json(user.likedMovies);
      } else {
         res.status(404);
         throw new Error("Movie not found");
      }
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

export const deleteLikedMovies = asyncHandler(async (req, res) => {
   try {
      const user = await User.findById(req.user._id);
      if (user) {
         user.likedMovies = [];
         await user.save();
         res.json({ message: "All liked movies deleted successfully" });
      } else {
         res.status(404);
         throw new Error("user not found");
      }
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

export const getUsers = asyncHandler(async (req, res) => {
   try {
      const users = await User.find({});
      res.json(users);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});
export const deleteUser = asyncHandler(async (req, res) => {
   try {
      const user = await User.findById(req.params.id);

      if (user) {
         if (user.isAdmin) {
            res.status(400);
            throw new Error("Can't delete admin user");
         }

         // Use findByIdAndDelete to delete the user
         const deletedUser = await User.findByIdAndDelete(req.params.id);

         if (deletedUser) {
            res.json({ message: "User deleted successfully" });
         } else {
            res.status(404);
            throw new Error("User not found");
         }
      } else {
         res.status(404);
         throw new Error("User not found");
      }
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});
