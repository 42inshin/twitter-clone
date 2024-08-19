import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq9HJFnJ-_bHwF04GWDP6iUSFTjI2prhw",
  authDomain: "twitter-fb4a1.firebaseapp.com",
  projectId: "twitter-fb4a1",
  storageBucket: "twitter-fb4a1.appspot.com",
  messagingSenderId: "586543851731",
  appId: "1:586543851731:web:2441cecfcde11129c58c26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
