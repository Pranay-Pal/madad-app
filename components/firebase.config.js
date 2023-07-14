// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9_YeWlW-f5grVgKukwBMXSp_1Hs43AtY",
  authDomain: "madad-c5ecb.firebaseapp.com",
  projectId: "madad-c5ecb",
  storageBucket: "madad-c5ecb.appspot.com",
  messagingSenderId: "862172108140",
  appId: "1:862172108140:web:9316e9cc337e7ffba7cf49",
  measurementId: "G-YYRJE037ZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const fsdb = getFirestore(app);
export const storage = getStorage(app);