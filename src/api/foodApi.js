import I1 from "../img/i1.png"
import C3 from "../img/c3.png"
import F1 from "../img/f1.png"
import Fi1 from "../img/fi1.png"
import {
  GiChickenOven,
  GiOpenedFoodCan,
  GiBowlOfRice,
  GiDoubleFish,
  GiFruitBowl,
} from "react-icons/gi"
import { IoMdIceCream } from "react-icons/io"
import { IoWine } from "react-icons/io5"
export const ITEM_DATA = [
  {
    id: "p1",
    img: I1,
    title: "Icecream",
    description: "Chocolate and Vanilla",
    price: 700,
  },
  {
    id: "p2",
    img: F1,
    title: "Strawberries",
    description: "Handpicked Strawberries",
    price: 250,
  },
  {
    id: "p3",
    img: C3,
    title: "Kebab",
    description: "Mixed and Chicken Kebab",
    price: 1400,
  },

  {
    id: "p4",
    img: Fi1,
    title: "Fish Kebab",
    description: "Steamed and Regular",
    price: 1800,
  },
]
const classNameForIcons =
  "text-lg text-rowBg group-hover:text-textColor drop-shadow-md"
export const CATEGORIES = [
  {
    id: 1,
    title: "Chicken",
    urlParamTitle: "chicken",
    icon: <GiChickenOven className={classNameForIcons} />,
  },
  {
    id: 2,
    title: "Curry",
    urlParamTitle: "curry",
    icon: <GiOpenedFoodCan className={classNameForIcons} />,
  },
  {
    id: 3,
    title: "Rice",
    urlParamTitle: "rice",
    icon: <GiBowlOfRice className={classNameForIcons} />,
  },
  {
    id: 4,
    title: "Fish",
    urlParamTitle: "fish",
    icon: <GiDoubleFish className={classNameForIcons} />,
  },
  {
    id: 5,
    title: "Fruits",
    urlParamTitle: "fruits",
    icon: <GiFruitBowl className={classNameForIcons} />,
  },
  {
    id: 6,
    title: "Icecreams",
    urlParamTitle: "icecreams",
    icon: <IoMdIceCream className={classNameForIcons} />,
  },
  {
    id: 7,
    title: "Drinks",
    urlParamTitle: "drinks",
    icon: <IoWine className={classNameForIcons} />,
  },
]
