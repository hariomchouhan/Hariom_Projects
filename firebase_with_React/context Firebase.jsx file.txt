import { createContext, useContext } from "react";
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAi75U7Y0woKfa0BFKYiCK-S893cO0vjR4",
    authDomain: "app-9b4cc.firebaseapp.com",
    databaseURL: "https://app-9b4cc-default-rtdb.firebaseio.com",
    projectId: "app-9b4cc",
    storageBucket: "app-9b4cc.appspot.com",
    messagingSenderId: "31164111508",
    appId: "1:31164111508:web:74f4ee83dfe743c05c3281",
    measurementId: "G-2B34L10GJ9"
  };

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {

    const signupUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    }

    const putData = (key, data) =>{
        set(ref(database, key), data);
    }
    return(
        <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword, putData }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}