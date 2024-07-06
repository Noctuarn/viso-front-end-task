import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


//* Firebase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "viso-front-end-task-7095f.firebaseapp.com",
  projectId: "viso-front-end-task-7095f",
  storageBucket: "viso-front-end-task-7095f.appspot.com",
  messagingSenderId: "42305731247",
  appId: "1:42305731247:web:84518ab17f70f096ffb25a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
