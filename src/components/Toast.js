import React from "react"
import "./Toast.css"
const Toast = ({ message }) => {
  return (
    <>
      <div className='notification-container'>
        <div className='notification toast'>
          <button>X</button>

          <div>
            <p className='notification-message'>Message</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Toast
