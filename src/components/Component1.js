import React, { useState } from "react"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
const Component1 = () => {
  const [text, setText] = useState("")
  return (
    <div>
      <Header />
      <form>
        <div>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button>Submit</button>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Component1
