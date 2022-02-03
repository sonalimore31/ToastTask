import React, { useState } from "react"
import Toast from "./Toast"

const Body = () => {
  const [show, setShow] = useState(false)

  return (
    <div className='body1'>
      <button onClick={() => setShow(!show)}>show Toast</button>
      {show && <Toast message='default Message' />}
    </div>
  )
}

export default Body
