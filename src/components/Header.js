import React, { useEffect, useState } from 'react'
import { Link, useParams} from 'react-router-dom'
import "../MainPage.css"
import { FiLogOut } from 'react-icons/fi'


function Header() {
  let {email} = useParams()
  let [data, setData]=useState({})
  const fetchData = () => {
    fetch(`https://justmyroots.onrender.com/login/${email}`)
        .then((response) => response.json())
        .then((data) => {
            setData(data[0]);
        });
};
useEffect(() => {
    fetchData();
}, []);
 
  return (
    <header className='header'>
      <div>Products</div>
    <div><span>{data.email}</span><abbr title="Logout"><Link to="/"><FiLogOut /></Link></abbr></div>
    </header>
  )
}

export default Header