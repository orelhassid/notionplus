import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

import dotenv from "dotenv";
import { SECRET, expiresIn } from "../config/index.js";
dotenv.config();

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId).exec();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.error(error);
  }
};

export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body); // Need to pass res.body
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id: _id } = req.params;
  const user = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("The user id is inValid.");

  try {
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      { ...user, _id },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(404).send("The user with the given id was not found.");
  }
};

export const deleteUser = async (req, res) => {
  const { id: _id } = req.params;

  try {
    const removedUser = await User.findByIdAndRemove(_id);
    res.status(200).json(removedUser);
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).exec();

    if (!user) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: user.email, id: user._id }, SECRET, {
      expiresIn,
    });

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ details: "Something went wrong" });
    console.error(error);
  }
};

export const registerUser = async (req, res) => {
  try {
    const {
      email,
      password,
      passwordConfirm,
      firstName,
      lastName,
      ...rest
    } = req.body;

    const user = await User.findOne({ email }).exec();

    if (user) return res.status(400).json({ message: "User already exist" });

    if (password !== passwordConfirm)
      return res.status(400).json({ message: "Password not matches." });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
      ...rest,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, SECRET, {
      expiresIn,
    });
    res.status(200).json({ result, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ details: "Something went wrong" });
  }
};
