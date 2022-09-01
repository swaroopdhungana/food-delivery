import React from "react"
import Delivery from "../img/delivery.png"
import HeroBg from "../img/heroBg.png"
const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center  gap-6">
        <div className="flex items-center gap-2 justify-center bg-[#fac2d7] rounded-full px-4 py-1">
          <p className="text-base text-[#f0508e] font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
            <img
              src={Delivery}
              alt="delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <p className="text-[2.5rem] font-bold tracking-wide text-headingColor lg:text-[4.5rem]">
          The Fastest Delivery in
          <span className="text-[#f0508e] text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md-w[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ullam
          sed aliquam temporibus adipisci cum rem quidem inventore veritatis
          accusantium?
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-[#fa80af] to-[#f0508e] w-full px-4 py-3 font-bold rounded-lg hover:shadow-xl transition-all ease-in-out duration-150 md:w-auto "
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center">
        <img
          src={HeroBg}
          className="ml-auto lg:h-650 lg:w-auto h-420 w-full "
          alt="hero-bg"
        />
        <div className="w-full h-full absolute flex items-center justify-center"></div>
      </div>
    </section>
  )
}

export default HomeContainer
