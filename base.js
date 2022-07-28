import firebase from 'firebase'
import 'firebase/storage'

export const firebaseConfig = {
    apiKey: "AIzaSyCIFetmLfW5ptbNBydC8CM3WItNmgzsI8U",
    authDomain: "my-sounds-app-7031d.firebaseapp.com",
    databaseURL: "https://my-sounds-app-7031d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "my-sounds-app-7031d",
    storageBucket: "my-sounds-app-7031d.appspot.com",
    messagingSenderId: "280990421420",
    appId: "1:280990421420:web:a0c58e981a5db2d680ea09"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);