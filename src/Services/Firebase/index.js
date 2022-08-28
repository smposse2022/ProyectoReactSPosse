// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Debo inicializar el servicio de Firestore
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apikey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// la const app de la línea 17 es la referencia a mi backend

// Tengo que ir a buscar mi base de datos que está dentro de mi proyecto de Firebase
export const dataBase = getFirestore(app);
