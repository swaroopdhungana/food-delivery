import { fetchUser } from "../util/FetchLocalStorageData"

const userInfo = fetchUser()

export const initialState = {
  user: userInfo,
  foodItems: null,
}
