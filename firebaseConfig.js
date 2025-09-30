// frontend/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCR2LPTc7xyDalskCR33ECfz7SBXuGNAmQ",
  authDomain: "one-click-chiremba.firebaseapp.com",
  projectId: "one-click-chiremba",
  storageBucket: "one-click-chiremba.firebasestorage.app",
  messagingSenderId: "664673582873",
  appId: "1:664673582873:web:9f8592221e40413b9e8f88",
  measurementId: "G-64DS2SFHKR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default firebaseConfig;
