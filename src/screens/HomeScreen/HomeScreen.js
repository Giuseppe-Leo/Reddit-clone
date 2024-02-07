import React from 'react'
import NavBar from '../../components/Navbar/NavBar'
import SideBar from '../../components/SideBar/SideBar'
import './HomeScreen.css'
import Body from '../../components/Body/Body'

function HomeScreen() {
  return (
    <div className='home'>
        <NavBar/>
       
        <div className="home-body">
        <SideBar/>
        <div className="body-container">
        <Body/>
    </div>
    </div>
    </div>
  )
}

export default HomeScreen