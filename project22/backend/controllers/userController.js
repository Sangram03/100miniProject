import userModel from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const createToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

// ✅ LOGIN USER
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.json({ success: false, message: "Email and password are required" });
    }

    const user = await userModel.findOne({ email });
    if (!user) return res.json({ success: false, message: "User doesn't exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ success: false, message: "Invalid credentials" });

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: "Error logging in" });
  }
};

// ✅ REGISTER USER
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password)
      return res.json({ success: false, message: "All fields are required" });

    if (!validator.isEmail(email))
      return res.json({ success: false, message: "Invalid email format" });

    if (password.length < 8)
      return res.json({ success: false, message: "Password must be at least 8 characters" });

    const exists = await userModel.findOne({ email });
    if (exists) return res.json({ success: false, message: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({ name, email, password: hashedPassword });
    const user = await newUser.save();

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: "Error registering user" });
  }
};

export { loginUser, registerUser };
