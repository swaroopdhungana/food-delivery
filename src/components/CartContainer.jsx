import React from "react"
import { MdOutlineKeyboardBackspace } from "react-icons/md"
import { RiRefreshFill } from "react-icons/ri"
import { motion } from "framer-motion"
import { useState } from "react"
import { useStateValue } from "../context/StateProvider"
import { actionType } from "../context/reducer"
const CartContainer = () => {
  const [quantity, setQuantity] = useState(0)
  const [{ cartShow }, dispatch] = useStateValue()
  const onAddClick = () => {
    setQuantity(quantity + 1)
  }
  const onSubClick = () => {
    if (quantity === 0) return
    setQuantity(quantity - 1)
  }

  const onCartClick = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    })
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-full md:w-375 h-screen drop-shadow-md flex flex-col bg-white z-[101]"
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer ">
        <motion.div whileTap={{ scale: 0.75 }}>
          <MdOutlineKeyboardBackspace
            className="text-textColor text-3xl"
            onClick={onCartClick}
          />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>
        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-rowBg rounded-md hover:shadow-md cursor-pointer text-textColor"
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>
      {/* bottom section */}
      <div className="w-full rounded-t-[2rem] flex flex-col ">
        <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-2 overflow-y-scroll scrollbar-none">
          {/* cart item */}
          <div className="w-full p-1 px-2 rounded-lg bg-green-700 flex items-center gap-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/resturantapp-e3379.appspot.com/o/Images%2F1663300031638-f9.png?alt=media&token=158b6a26-4369-4bb3-a2cb-b0de0df29efb"
              alt="food"
              className="w-20 h-20 max-w-[80px]"
            />
            {/* cart item name */}
            <div className="flex flex-col gap-2">
              <p className="text-base text-rowBg">Item Title</p>
              <p className="text-sm block text-black font-semibold">Rs. 900</p>
            </div>
            {/* button section */}
            <div className="group flex items-center gap-2 ml-auto cursor-pointer">
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="font-semibold text-xl text-white"
                onClick={onSubClick}
              >
                -
              </motion.div>
              <p className="w-5 h-5 rounded-sm bg-secondaryColor text-white flex items-center justify-center">
                {quantity}
              </p>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="font-semibold text-xl text-white"
                onClick={onAddClick}
              >
                +
              </motion.div>
            </div>
          </div>
        </div>
        {/* cart total */}
        <div className="w-full bg-black flex-1 rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
          <div className="w-full flex items-center justify-between">
            <p className="text-white text-lg">Sub Total</p>
            <p className="text-white text-lg"> Rs.1234</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-white text-lg">Discount</p>
            <p className="text-white text-lg">Rs. 1294</p>
          </div>
          <div className="w-full border-b border-black-700 my-2"></div>
          <div className="w-full flex items-center justify-between">
            <p className="text-white text-xl font-semibold">Total</p>
            <p className="text-white text-xl font-semibold">Rs.12455</p>
          </div>
          <motion.button
            whileTap={{ scale: 0.75 }}
            type="button"
            className="w-full p-2 rounded-full bg-secondaryColor text-white text-lg my-2 hover:shadow-lg"
          >
            Check out
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default CartContainer
