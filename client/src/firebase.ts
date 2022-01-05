import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBYRHU0I0u8OWcFDIm94L1pIo2Ry1dbIMk',
  authDomain: 'selfhosting-edumatica.firebaseapp.com',
  projectId: 'selfhosting-edumatica',
  storageBucket: 'selfhosting-edumatica.appspot.com',
  messagingSenderId: '937052822202',
  appId: '1:937052822202:web:7281c0a535eb2183154083',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
