import React, { useState } from "react"
import HomeContainer from "./HomeContainer"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import { motion } from "framer-motion"
import RowContainer from "./RowContainer"
import { useStateValue } from "../context/StateProvider"
import { useRef } from "react"
import { useEffect } from "react"
import MenuContainer from "./MenuContainer"
const MainContainer = () => {
  const [{ foodItems }, dispatch] = useStateValue()
  const [scrollValue, setScrollValue] = useState(0)

  useEffect(() => {})
  // console.log(foodItems)

  return (
    <div className="w-full h-auto flex-col flex items-center justify-center">
      <HomeContainer />
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-xl font-semibold uppercase relative text-headingColor before:absolute before:rounded-lg before:content before:w-[125px] before:h-1 before:-bottom-2 before:left-1 before:bg-gradient-to-tr from-pink-400 to-pink-600 transition-all ease-in-out duration-150">
            Our Fresh & Healthy Fruits
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-pink-400 hover:bg-pink-500 cursor-pointer transistion-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronLeft
                className="text-white text-lg"
                onClick={() => setScrollValue(-250)}
              />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-pink-400 hover:bg-pink-500 cursor-pointer transistion-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronRight
                className="text-white text-lg"
                onClick={() => setScrollValue(+250)}
              />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === "fruits")}
        />
      </section>
      <MenuContainer />
    </div>
  )
}

export default MainContainer
