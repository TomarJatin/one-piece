import { initializeApp } from 'firebase/app';
import { getFirestore, Firestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC3gXcW0iA2E8LYRgbE4PosmYWJGGFOCEo",
  authDomain: "manga-cc1a7.firebaseapp.com",
  projectId: "manga-cc1a7",
  storageBucket: "manga-cc1a7.appspot.com",
  messagingSenderId: "400185580785",
  appId: "1:400185580785:web:6d48827867ba85c3335d50",
  measurementId: "G-SXCD1W4Q0T",
};

const app = initializeApp(firebaseConfig);
const firestore: Firestore = getFirestore(app);

export { firestore, collection, getDocs };
