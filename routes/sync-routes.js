import express from 'express';
import User from '../models/user-model.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const decodedUserInfo = req.user;

  console.log(1);
  try {
    const existingUser = await User.findOne({ uid: decodedUserInfo.uid });
    console.log(existingUser);

    if (!existingUser) {
      console.log(`new user registered from sync`);
      const newUser = await User.create({
        email: decodedUserInfo.email,
        uid: decodedUserInfo.uid,
      });
      await newUser.save();
      return res.status(201).json({ message: 'new user created' });
    }
    res.status(200).json({ message: 'user already exists' });
  } catch (error) {
    console.error(error);
  }
});

export default router;
