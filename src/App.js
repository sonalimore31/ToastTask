import logo from "./logo.svg"
import "./App.css"
import Main from "./components/Main"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Component1 from "./components/Component1"
import Component2 from "./components/Component2"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Component1' element={<Component1 />} />
        <Route path='/Component2' element={<Component2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
