import React from 'react';
import { Routes, Route } from "react-router-dom";

import SignIn from './components/SignIn_SignUp/SignIn';
import SignUp from './components/SignIn_SignUp/SignUp';
import FormPage from './components/form/FormPage';
function App() {
  return (
    <div>

     <Routes>
        <Route path="/" element={<SignIn />} >
          {/* <Route path=":email" element={<Header/>}/> */}
        </Route>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/form/:email" element={<FormPage />} />
        </Routes>  
    </div>


  )
}

export default App
