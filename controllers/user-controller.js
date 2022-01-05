import User from '../models/user-model.js';

export const getAllUsers = async (req, res) => {
  console.log(`running get user`);

  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  console.log(`running create user`);

  const user = req.body;
  const newUser = await new User(user);

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
