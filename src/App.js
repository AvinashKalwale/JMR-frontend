import React from 'react';
import { Routes, Route } from "react-router-dom";

import SignIn from './components/SignIn_SignUp/SignIn';
function App() {
  return (
    <div>

     <Routes>
        <Route path="/" element={<SignIn />} >
          {/* <Route path=":email" element={<Header/>}/> */}
        </Route>
        </Routes>  
    </div>


  )
}

export default App
