import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookies from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmpassword, gender } = req.body;

    if (password !== confirmpassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const bodyProfile = `https://api.dicebear.com/7.x/croodles/svg?seed=${username}`;
    const newUser = new User({
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilePic: bodyProfile,
    });
    if (newUser) {
      await generateTokenAndSetCookies(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        fullname: newUser.fullname,
        profilePic: newUser.profilePic,
        message: "User created successfully",
      });
    } else {
      return res.status(400).json({ error: "Invalid exists" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcryptjs.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    await generateTokenAndSetCookies(user._id, res);
    res.status(200).json({
      _id: user._id,
      username: user.username,
      fullname: user.fullname,
      profilePic: user.profilePic,
      message: "User logged in successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    await res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({
      message: "User logged out successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
