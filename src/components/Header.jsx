import React from "react"
import Logo from "../img/logo.png"
import Avatar from "../img/avatar.png"
import { MdShoppingCart } from "react-icons/md"
const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* desktop and tablet */}
      <div className="hidden md:flex w-full h-full item-center justify-between">
        <div className="flex item-center gap-2">
          <img src={Logo} alt="Logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">Goblin</p>
        </div>

        <div className="flex item-center gap-8 ">
          <ul className="flex item-center gap-8">
            <li className="text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out ">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor cursor-pointer  duration-100 transition-all ease-in-out">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor cursor-pointer  duration-100 transition-all ease-in-out">
              About Us
            </li>
            <li className="text-base te duration-100 transition-all ease-in-outxt-textColor hover:text-headingColor cursor-pointer  duration-100 transition-all ease-in-out">
              Service
            </li>
          </ul>
          <div className="relative flex item-center justify-center">
            <MdShoppingCart className="text-textColor text-2xl  cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex justify-center item-center ">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>

          <img
            src={Avatar}
            alt="user-avatar"
            className="w-8 min-w-[32px] h-8 min-h-[32px] drop-shadow-xl"
          />
        </div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden w-full h-full "></div>
    </header>
  )
}

export default Header
