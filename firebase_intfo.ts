// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiATaZ10SLIEBSTUzekQThb8TPUjBHlyY",
    authDomain: "politikor-6f900.firebaseapp.com",
    projectId: "politikor-6f900",
    storageBucket: "politikor-6f900.firebasestorage.app",
    messagingSenderId: "440753342759",
    appId: "1:440753342759:web:4f4f18724774e2aa6d8102",
    measurementId: "G-QEE2SH1MPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);