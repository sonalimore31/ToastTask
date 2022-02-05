import React from "react"
import "./Toast.css"
const Toast = ({ message, parentCallback }) => {
  return (
    <>
      <div className='div1'>
        <div>
          {message}
          <button
            className='b1'
            onClick={() => {
              parentCallback(false)
            }}
          >
            x
          </button>
        </div>
      </div>
    </>
  )
}

export default Toast
