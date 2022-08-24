// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Debo inicializar el servicio de Firestore
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABRLAOecUN52NcQGueO0SJLHj-Q9jre6o",
  authDomain: "curso-react-sposse.firebaseapp.com",
  projectId: "curso-react-sposse",
  storageBucket: "curso-react-sposse.appspot.com",
  messagingSenderId: "704936585592",
  appId: "1:704936585592:web:f1f0928aab45fca6ac808d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// la const app de la línea 17 es la referencia a mi backend

// Tengo que ir a buscar mi base de datos que está dentro de mi proyecto de Firebase
export const dataBase = getFirestore(app);
