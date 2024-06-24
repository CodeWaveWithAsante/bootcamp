import { comparePasswords, createJWT, hashPassword } from "../libs/index.js";
import User from "../models/userModel.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email address already exists" });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create a new user
    const newUser = {
      firstName: name,
      email,
      password: hashedPassword,
    };

    const savedUser = await new User(newUser).save();

    res
      .status(201)
      .json({ status: "success", message: "User registered successfully" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Server Error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check if password matches
    const isMatch = await comparePasswords(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = createJWT(user._id);

    user.password = undefined; // Remove password from response

    res.status(200).json({
      status: "success",
      message: "Logged in successfully",
      token,
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Server Error" });
  }
};
