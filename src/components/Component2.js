import React, { useState } from "react"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import Toast from "./Toast"
const Component2 = () => {
  const [text, setText] = useState()
  const [show, setShow] = useState(false)

  const showToast = (e) => {
    e.preventDefault()
    setShow(!show)
  }
  return (
    <div>
      <Header />
      <form onSubmit={(e) => showToast(e)}>
        <div>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className='button1'>Submit</button>
          {show && <Toast message={text} />}
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Component2
