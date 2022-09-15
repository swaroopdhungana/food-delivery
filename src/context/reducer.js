export const actionType = {
  SET_USER: "SET_USER",
  SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
}

const reducer = (state, action) => {
  //   console.log(action)
  switch (action.type) {
    case action.SET_USER:
      return {
        ...state,
        user: action.user,
      }
    case action.SET_FOOD_ITEMS:
      return {
        ...state,
        foodItems: action.foodItems,
      }
    default:
      return state
  }
}
export default reducer
