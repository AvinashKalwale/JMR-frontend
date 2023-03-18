import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import SignIn from './components/SignIn_SignUp/SignIn';
import SignUp from './components/SignIn_SignUp/SignUp';
import FormPage from './components/form/FormPage';

import View from './components/form/View';
function App() {
  return (
    <div>

     <Routes>
        <Route path="/" element={<SignIn />} >
          <Route path=":email" element={<Header/>}/>
        </Route>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/form/:email" element={<FormPage />} />
        <Route path="/view/:_id" element={<View />} />
        </Routes>  
    </div>


  )
}

export default App
