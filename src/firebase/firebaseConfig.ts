/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiZeKdaGlpBat_jChDWVn_eLS1U3ZXVss",
  authDomain: "bestreaders.firebaseapp.com",
  projectId: "bestreaders",
  storageBucket: "bestreaders.appspot.com",
  messagingSenderId: "685262643279",
  appId: "1:685262643279:web:5794441d4a517ea7304a3a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
