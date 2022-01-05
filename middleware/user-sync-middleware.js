import admin from '../config/firebase-config.js';

export const userSyncMiddleware = async (req, res, next) => {
  console.log('user sync middleware');

  const token = req.headers.authorization.split(' ')[1];

  try {
    const decodeValue = await admin.auth().verifyIdToken(token);

    if (!decodeValue) {
      return res.status(403).json({ message: 'You are not authorized for this action' });
    }

    req.user = decodeValue;
  } catch (error) {
    console.error(error);
  }

  next();
};
