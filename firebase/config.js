import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSMNNts_hkxC9KvPzFMfeP27xHz6GANVo",
  authDomain: "miniblog-b1dbb.firebaseapp.com",
  projectId: "miniblog-b1dbb",
  storageBucket: "miniblog-b1dbb.appspot.com",
  messagingSenderId: "89410663896",
  appId: "1:89410663896:web:7d7bf35f22374256fdaead",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
