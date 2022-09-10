//Saving new items
import { setDoc, doc } from "firebase/firestore"
import { firestore } from ".././config/firebase.config"
export const saveItems = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  })
}
