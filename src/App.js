import React from 'react';
import { Routes, Route } from "react-router-dom";

import SignIn from './components/SignIn_SignUp/SignIn';
import SignUp from './components/SignIn_SignUp/SignUp';
function App() {
  return (
    <div>

     <Routes>
        <Route path="/" element={<SignIn />} >
          {/* <Route path=":email" element={<Header/>}/> */}
        </Route>
        <Route path="/signUp" element={<SignUp />} />
        </Routes>  
    </div>


  )
}

export default App
