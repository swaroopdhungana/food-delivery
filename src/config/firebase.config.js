import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCx82q1QkS2KbFzHfswRPHQEROBZSqmx6U",
  authDomain: "resturantapp-e3379.firebaseapp.com",
  databaseURL: "https://resturantapp-e3379-default-rtdb.firebaseio.com",
  projectId: "resturantapp-e3379",
  storageBucket: "resturantapp-e3379.appspot.com",
  messagingSenderId: "308725706426",
  appId: "1:308725706426:web:3a30d315d5f2bc48d65c83",
}
//check if we have app initliazed already or not else create a new one
const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)
export { app, firestore, storage }
