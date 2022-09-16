import React, { useEffect } from "react"
import { MdAddShoppingCart } from "react-icons/md"
import { motion } from "framer-motion"
import { MdStar, MdStarHalf } from "react-icons/md"
const RowContainer = ({ flag, data }) => {
  let ratingStar = Math.floor(Math.random() * 5 + 1)

  return (
    <div
      className={`w-full flex my-12 gap-4 ${
        flag
          ? "overflow-x-scroll scroll-bar-none "
          : "overflow-x-hidden flex-wrap"
      }`}
    >
      {data
        ? data.map((item) => {
            return (
              <div
                key={item.id}
                className="w-340 min-w-[300px] md:min-w-[340px] md:w-340 my-12 h-auto bg-cardOverlay rounded-lg p-2 backdrop-blur-lg hover:drop-shadow-xl"
              >
                <div className="w-full flex items-center justify-center">
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    src={item.imageURL}
                    alt={item.title}
                    className="w-40 drop-shadow-2xl -mt-8"
                  />
                </div>
                <div className="w-full flex flex-col">
                  <div className="items-start justify-start">
                    <p className="text-textColor font-semibold text-base md:text-lg">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-descriptionColor">
                      Calorie: {item.calories}
                    </p>
                    <div className="flex items-center gap-8">
                      <p className="text-lg text-priceColor font-semibold ">
                        <span className="text-sm text-pink-700">$</span>{" "}
                        {item.price}
                      </p>
                    </div>
                    <p className="flex items-start justify-start">
                      {[...Array(ratingStar)].map((star) => {
                        return (
                          <MdStar className="text-yellow-500 text-2xl mt-1" />
                        )
                      })}
                    </p>
                    <div className="flex items-end justify-end -mt-8">
                      <motion.div
                        whileTap={{ scale: 0.75 }}
                        className="w-9 h-9 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-700 hover:shadow-sm"
                      >
                        <MdAddShoppingCart className="text-white text-lg" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        : ""}
    </div>
  )
}

export default RowContainer
