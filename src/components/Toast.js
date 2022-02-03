import React from "react"
import "./Toast.css"
const Toast = ({ message }) => {
  const TOAST_TIMEOUT = 7000
  //   const timeout = document.getElementsByClassName("div1")

  //   setTimeout(hideElement, 7000) //milliseconds until timeout//
  //   function hideElement() {
  //     timeout.fadeOut(1500)
  //   }
  return (
    <>
      <div className='div1'>
        <div>{message}</div>
        <button className='b1'>x</button>
      </div>
    </>
  )
}

export default Toast
