import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBCN5aGZpyG7UwMM6IM4CQIKGRLp_7O5Ks",
  authDomain: "codecivilization-dev.firebaseapp.com",
  projectId: "codecivilization-dev",
  storageBucket: "codecivilization-dev.appspot.com",
  messagingSenderId: "339876453212",
  appId: "1:339876453212:web:9a8b7c6d5e4f3c2b1a9d8e"
};

const app = initializeApp(firebaseConfig);

export default app;