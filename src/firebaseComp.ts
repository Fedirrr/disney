import {initializeApp} from "firebase/app"
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDAH66W8d267ARgaCDGSlUjMZRCjTyNkOI",
    authDomain: "disneyclonelogin.firebaseapp.com",
    projectId: "disneyclonelogin",
    storageBucket: "disneyclonelogin.appspot.com",
    messagingSenderId: "663451765877",
    appId: "1:663451765877:web:fbf26182eeeb6aae987c3c",
    measurementId: "G-D7XQ96PJ5J"
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export {auth, provider}