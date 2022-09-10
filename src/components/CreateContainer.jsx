import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage"
import { storage } from "../config/firebase.config"
import {
  MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdFoodBank,
  MdAttachMoney,
} from "react-icons/md"
import { CATEGORIES } from "../api/foodApi"
import Loader from "./Loader"
import { saveItems } from "../util/firebaseFunction"
const CreateContainer = () => {
  const [title, setTitle] = useState("")
  const [calories, setCalories] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState(null)
  const [imageAsset, setImageAsset] = useState(null)
  const [fields, setFields] = useState(false)
  const [alertStatus, setAlertStatus] = useState("danger")
  const [msg, setMsg] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const uploadImage = (e) => {
    setIsLoading(true)
    const imageFile = e.target.files[0]
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`)
    const uploadTask = uploadBytesResumable(storageRef, imageFile)

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (err) => {
        console.log(err)
        setFields(true)
        setMsg("Error While Uploading: " + err)
        setAlertStatus("danger")
        setTimeout(() => {
          setFields(false)
          setIsLoading(false)
        }, 4000)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setImageAsset(downloadUrl)
          setIsLoading(false)
          setFields(true)
          setMsg("Uploaded successfully!")
          setAlertStatus("success")
          setTimeout(() => {
            setFields(false)
          }, 4000)
        })
      }
    )
  }
  const deleteImage = () => {
    setIsLoading(true)
    const deleteRef = ref(storage, imageAsset)
    deleteObject(deleteRef).then(() => {
      setImageAsset(null)
      setIsLoading(false)
      setFields(true)
      setMsg("Deleted successfully!")
      setAlertStatus("success")
      setTimeout(() => {
        setFields(false)
      }, 4000)
    })
  }

  const saveDetails = () => {
    setIsLoading(true)
    try {
      if (!title || !calories || !imageAsset || !price || !category) {
        setFields(true)
        setMsg("Fill out the form Properly!")
        setAlertStatus("danger")
        setTimeout(() => {
          setFields(false)
          setIsLoading(false)
        }, 4000)
      } else {
        const data = {
          id: `${Date.now()}`,
          title,
          imageURL: imageAsset,
          category,
          calories,
          qty: 1,
          price,
        }
        saveItems(data)
        setIsLoading(false)
        setFields(true)
        setMsg("Data Saved Sucessfully!")
        setAlertStatus("success")
        setTimeout(() => {
          setFields(false)
        }, 4000)
        clearData()
      }
    } catch (error) {
      console.log(error)
      setFields(true)
      setMsg("Error While Uploading: ")
      setAlertStatus("danger")
      setTimeout(() => {
        setFields(false)
        setIsLoading(false)
      }, 4000)
    }
  }

  const clearData = () => {
    setTitle("")
    setCategory("")
    setImageAsset(null)
    setCalories("")
    setCategory("")
    setPrice("")
  }
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[90%] md:w-[75%] border border-[#77a898] shadow-sm rounded-lg p-4 flex flex-col items-center justify-center gap-4">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-400"
                : "bg-pink-600 text-white"
            } `}
          >
            {msg}
          </motion.p>
        )}

        <div className="w-full py-2 border-b border-[#77a898] flex items-center gap-2">
          <MdFastfood className="text-xl text-textColor" />
          <input
            type="text"
            required
            value={title}
            placeholder="Give me a title"
            className="w-full h-full ml-2 text-lg bg-transparent font-semibold border-none outline-none text-textColor placeholder:text-[#65ba9f] placeholder:font-normal"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="w-full">
          <select
            className="outline-none w-full text-base border-b-2 border-[#77a898] p-2 text-textColor rounded-md cursor-pointer  "
            onChange={(e) => {
              setCategory(e.target.value)
            }}
          >
            <option value="other" className="bg-transparent">
              Select Category
            </option>
            {CATEGORIES &&
              CATEGORIES.map((item) => {
                return (
                  <option
                    key={item.id}
                    value={item.urlParamTitle}
                    className="text-base border-0 outline-none bg-primary text-textColor"
                  >
                    {item.title}
                  </option>
                )
              })}
          </select>
        </div>
        <div className="group flex justify-center items-center flex-col border-2 border-dotted border-[#77a898] w-full h-225 md:h-420 cursor-pointer rounded-lg">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-full h-full flex flex-col items-center justify-center ">
                      <MdCloudUpload className="text-textColor text-4xl hover:text-emerald-700" />
                      <p className="text-textColor text-md hover:text-emerald-700 font-semibold">
                        Click to Upload
                      </p>
                    </div>
                    <input
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      onChange={uploadImage}
                      className="w-0 h-0"
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="relative h-full">
                    <img
                      src={imageAsset}
                      alt="uploaded-pic"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transistion-all ease-in-out active:scale-2"
                      onClick={deleteImage}
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-teal-700 flex items-center gap-2 active:border-teal-900">
            <MdFoodBank className="text-textColor text-2xl" />
            <input
              type="text"
              required
              placeholder="Calories"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-[#65ba9f] placeholder:font-normal"
            />
          </div>
          <div className="w-full py-2 border-b border-teal-700 flex items-center gap-2 active:border-teal-900">
            <MdAttachMoney className="text-textColor text-2xl" />
            <input
              type="text"
              required
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-[#65ba9f] placeholder:font-normal"
            />
          </div>
        </div>
        <div className="flex items-center w-full">
          <button
            type="button"
            className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-[#f0508e] px-12 py-2 rounded-md text-white text-lg font-semibold"
            onClick={saveDetails}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateContainer
