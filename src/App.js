import React from 'react'
import { Routes, Route } from "react-router-dom";
import Error from './components/Error';
import Header from './components/Header';
import FormPage from './components/form/FormPage';
import View from './components/form/View';
import DisplayData from './components/Searchbar_Table/DisplayData';
import Edit from './components/form/Edit';
import SignIn from "./components/SignIn_SignUp/SignIn"
import SignUp from "./components/SignIn_SignUp/SignUp"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} >
          <Route path=":email" element={<Header/>}/>
        </Route>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/form/:email" element={<FormPage />} />
        <Route path="/edit/:_id" element={<Edit />} />
        <Route path="/display/:email" element={<DisplayData />} />
        <Route path="/view/:_id" element={<View />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>


  )
}

export default App
