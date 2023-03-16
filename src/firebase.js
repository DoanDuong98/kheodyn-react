// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyB3vyV0OQfzPQPgCTflx4w8DIUiO0mqe6I',
    authDomain: 'kheo-dyn-web.firebaseapp.com',
    projectId: 'kheo-dyn-web',
    storageBucket: 'kheo-dyn-web.appspot.com',
    messagingSenderId: '1079538586680',
    appId: '1:1079538586680:web:8a480ac85967905ad482cd',
    measurementId: 'G-67QWZQRBHX'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
