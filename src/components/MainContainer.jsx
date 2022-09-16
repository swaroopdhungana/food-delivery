import React from "react"
import HomeContainer from "./HomeContainer"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import { motion } from "framer-motion"
import RowContainer from "./RowContainer"
import { useStateValue } from "../context/StateProvider"
const MainContainer = () => {
  const [{ foodItems }, dispatch] = useStateValue()
  console.log(foodItems)

  return (
    <div className="w-full h-auto flex-col flex items-center justify-center">
      <HomeContainer />
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold uppercase relative text-headingColor before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:bg-gradient-to-tr from-pink-400 to-pink-600 transition-all ease-in-out duration-150">
            Our Fresh & Healthy Fruits
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-pink-400 hover:bg-pink-500 cursor-pointer transistion-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronLeft className="text-white text-lg" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-pink-400 hover:bg-pink-500 cursor-pointer transistion-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronRight className="text-white text-lg" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          flag={true}
          data={foodItems?.filter((n) => n.category === "fruits")}
        />
      </section>
    </div>
  )
}

export default MainContainer
