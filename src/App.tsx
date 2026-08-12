import {  Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import PayInfo from "./Pages/PayInfo"
import SuccessFullyPaid from "./Pages/SuccessFullyPaid"

const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/paynow" element={<PayInfo/>}></Route>
        <Route path="/successPayment" element={<SuccessFullyPaid/>}></Route>
      </Routes>
    </div>
  )
}

export default App