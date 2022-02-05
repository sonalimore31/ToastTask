import React, { useState } from "react"
import Toast from "./Toast"

const Body = () => {
  const [show, setShow] = useState(false)
  const [ToastTime, setToastTime] = useState(7000)
  const showToast = () => {
    setShow(!show)
    setTimeout(() => {
      setShow(false)
    }, ToastTime)
  }

  const setTime = () => {
    console.log("mouseOver")
  }
  const callbackFunction = (childData) => {
    console.log("childData>>", childData)
    setShow(childData)
  }
  return (
    <div className='body1'>
      <button onClick={() => showToast()} className='button1'>
        show Toast
      </button>
      {show && (
        <div onMouseOver={setTime}>
          <Toast message='default Message' parentCallback={callbackFunction} />
        </div>
      )}
    </div>
  )
}

export default Body
