import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyDjidZmED0Sjslmirci_-9r-XWGw2oxhtU",
    authDomain: "auth-chat-app-b4471.firebaseapp.com",
    projectId: "auth-chat-app-b4471",
    storageBucket: "auth-chat-app-b4471.appspot.com",
    messagingSenderId: "1068739440489",
    appId: "1:1068739440489:web:27a8e74e7aee146fd657f8",
    measurementId: "G-70RXXR2Z62"
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

