import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getDatabase, ref, child, get } from "firebase/database";
import { Firestore } from "firebase/firestore"
import { storageService } from "./storage.service";


const firebaseConfig = {
    apiKey: "AIzaSyDKE_rXWJOzOFAmjpsVLSJ4lgyXeNQ-i_M",
    authDomain: "disney-plus-clone-2b206.firebaseapp.com",
    projectId: "disney-plus-clone-2b206",
    storageBucket: "disney-plus-clone-2b206.appspot.com",
    messagingSenderId: "428817170922",
    appId: "1:428817170922:web:967c31f42bbf52a5997293",
    measurementId: "G-RZ988DLDFE",
    databaseURL: "https://disney-plus-clone-2b206-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const database = getDatabase(app);

async function onLoginWithGoogle() {
    try {
        const results = await signInWithPopup(auth, provider)
        const newUser = {
            fullname: results.user.displayName,
            imgUrl: results.user.photoURL,
        }
        storageService.saveToStorage("user", newUser)

        return newUser
    } catch (err) {
        console.log(err);
    }
}

function loggedinUser() {
    const user = storageService.loadFromStorage("user")
    if (!user) return null
    else {
        return user
    }
}

function onLogout() {
    localStorage.removeItem("user")
}

async function getData() {
    try {
        const moviesFromLS = storageService.loadFromStorage('movies')
        if (!moviesFromLS) {
            console.log("from DATABASE");
            const dbRef = ref(database);
            const results = await get(child(dbRef, '/'))

            if (results.exists()) {

                const { movies } = results.val()
                movies.splice(0, 1)

                storageService.saveToStorage('movies', movies)
                return movies
            } else {
                console.log("No data available");
            }

        } else {
            console.log("from LOCALSTORAGE");

            return moviesFromLS
        }
    } catch (error) {
        console.error(error);
    };
}

function sortMovies(movies) {
    let organizedMovies = {
        recommend: [],
        new: [],
        trending: [],
        original: []
    }
    movies.forEach((currValue) => {
        organizedMovies[currValue.type].push(currValue)
    })
    return organizedMovies
}

export const firebaseService = {
    onLoginWithGoogle,
    loggedinUser,
    onLogout,
    getData,
    sortMovies
}