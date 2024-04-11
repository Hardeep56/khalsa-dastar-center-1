import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz6onWF6YNxy0VVkdI8wZP5dwpQox96L4",
  authDomain: "khalsa-dastar-center.firebaseapp.com",
  projectId: "khalsa-dastar-center",
  storageBucket: "khalsa-dastar-center.appspot.com",
  messagingSenderId: "379529586549",
  appId: "1:379529586549:web:02a4f3179400c09cc8153c",
  measurementId: "G-W6JLNWWN26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { getFunctions, httpsCallable };
export default app;