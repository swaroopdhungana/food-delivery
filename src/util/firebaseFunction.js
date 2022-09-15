//Saving new items
import {
  setDoc,
  doc,
  query,
  collection,
  orderBy,
  getDocs,
} from "firebase/firestore"
import { firestore } from ".././config/firebase.config"
export const saveItems = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  })
}

export const getItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "foodItems"), orderBy("id", "desc"))
  )
  return items.docs.map((doc) => doc.data())
}
