import React from "react"
import { motion } from "framer-motion"
import { IoFastFood } from "react-icons/io5"
import { useState } from "react"
import { CATEGORIES } from "../api/foodApi"
import RowContainer from "./RowContainer"
import { useStateValue } from "../context/StateProvider"

const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken")
  const [{ foodItems }, dispatch] = useStateValue()
  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-xl font-semibold uppercase relative text-headingColor before:absolute before:rounded-lg before:content before:w-[80px] before:h-1 before:-bottom-2 before:left-1 before:bg-gradient-to-tr from-pink-400 to-pink-600 transition-all ease-in-out duration-150 mr-auto">
          Our Hot Dishes
        </p>

        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {CATEGORIES.map((category) => (
            <motion.div
              key={category.id}
              whileTap={{ scale: 0.85 }}
              className={`group ${
                filter === category.urlParamTitle
                  ? "bg-secondaryColor"
                  : "bg-rowBg"
              } hover:bg-secondaryColor w-35 min-w-[120px] h-32 cursor-pointer rounded-lg shadow-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center `}
              onClick={() => setFilter(category.urlParamTitle)}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`w-12 h-12 rounded-full flex ${
                  filter === category.urlParamTitle
                    ? " bg-rowBg"
                    : " bg-secondaryColor"
                } group-hover:bg-rowBg  items-center justify-center`}
              >
                {category.icon}
              </motion.div>
              <p
                className={`${
                  filter === category.urlParamTitle
                    ? "text-rowBg"
                    : "text-textColor"
                } text-base group-hover:text-rowBg font-semibold first-letter:uppercase drop-shadow-lg`}
              >
                {category.urlParamTitle}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category === filter)}
          />
        </div>
      </div>
    </section>
  )
}

export default MenuContainer
