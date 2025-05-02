import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDwF2awpsglb_l-NZopVIOWlmzRfTpWPQo",
  authDomain: "impact-dashboard-d7810.firebaseapp.com",
  projectId: "impact-dashboard-d7810",
  storageBucket: "impact-dashboard-d7810.appspot.com",
  messagingSenderId: "585517096904",
  appId: "1:585517096904:web:43306b2c87925d07896afd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
