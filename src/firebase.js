import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCGPIn68XxhXxPTQAkWzFOujUmHnr9mSn4",
    authDomain: "clonflix-2b53d.firebaseapp.com",
    projectId: "clonflix-2b53d",
    storageBucket: "clonflix-2b53d.appspot.com",
    messagingSenderId: "1017104074738",
    appId: "1:1017104074738:web:84660f91c75f5d23b88d6b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth= firebase.auth();

export {auth, firebaseApp}