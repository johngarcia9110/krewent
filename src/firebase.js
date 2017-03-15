import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC0YJYaU7zoF6saqLvVHwrG4pBrTKWTG6w",
    authDomain: "krewent-150e8.firebaseapp.com",
    databaseURL: "https://krewent-150e8.firebaseio.com",
    storageBucket: "krewent-150e8.appspot.com",
    messagingSenderId: "650813699838"
};

export const firebaseApp = firebase.initializeApp(config);