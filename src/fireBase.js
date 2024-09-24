
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAn1clYTSH_QLBAx0xNlFE2viTyu3rZz4A",
  authDomain: "portfolio-e3f83.firebaseapp.com",
  databaseURL: "https://portfolio-e3f83-default-rtdb.firebaseio.com",
  projectId: "portfolio-e3f83",
  storageBucket: "portfolio-e3f83.appspot.com",
  messagingSenderId: "183258174245",
  appId: "1:183258174245:web:21fdf4ff3d75d36cb5c0cc",
  measurementId: "G-DWR8QJHQ18"
};

const app = initializeApp(firebaseConfig);

export default app;