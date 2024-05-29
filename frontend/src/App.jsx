import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Courses from "./Pages/Courses"
import Signup from "./Components/Signup/Signup";





function App() {
 

  return (
    <>
   
   

   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/course" element={<Courses />}/>
    <Route path="/signup" element={<Signup />}/>
   </Routes>
  </>
  )
}

export default App
