import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase, set, ref, update, push, onValue, } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDm5asimVmIgo_hIrHK33lmnKoQyxudLYQ",
    authDomain: "tap-now-ae13b.firebaseapp.com",
    databaseURL: "https://tap-now-ae13b-default-rtdb.firebaseio.com",
    projectId: "tap-now-ae13b",
    storageBucket: "tap-now-ae13b.appspot.com",
    messagingSenderId: "162669425347",
    appId: "1:162669425347:web:d7d08dc908c4dcf41ea876"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
// export const db=getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app);
