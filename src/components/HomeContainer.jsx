import React from "react"
import Delivery from "../img/delivery.png"
import HeroBg from "../img/heroBg.png"
// import ButtonBg from "../img/button.png"
import { ITEM_DATA } from "../api/foodApi"
const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center  gap-6">
        <div className="flex items-center gap-2 justify-center bg-[#fac2d7] rounded-3xl px-4 py-1">
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
          The Fastest Delivery in{" "}
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
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="ml-auto lg:h-650 lg:w-auto h-420 w-full "
          alt="hero-bg"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 flex-wrap gap-4">
          {ITEM_DATA.map((item) => {
            return (
              <div
                key={item.id}
                className=" lg:w-[200px] p-4 bg-cardOverlay backdrop-blur-md rounded-xl flex flex-col items-center justify-center shadow-lg"
              >
                <img
                  src={item.img}
                  alt="products"
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                />
                <p className="text-textColor text-base lg:text-xl font-semibold mt-2 lg:mt-4">
                  {item.title}
                </p>
                <p className="lg:text-sm text-[10px] text-descriptionColor font-semibold my-1 lg:my-3 text-center ">
                  {item.description}
                </p>
                <p className="text-sm text-priceColor font-semibold ">
                  <span className="text-md">Rs. </span>
                  {item.price}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeContainer
