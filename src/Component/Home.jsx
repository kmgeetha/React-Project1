import React from 'react'
import '../Style/home.css'
import logo from '../Images/home1.png'

const Home = () => {
  return (
    <div className="hompage">
    <div className="container">

        <div className="header">Home</div>
          <div className="box">
          <h1>The web applictaion agency that helps you grow </h1>
            <div className='image' > <img src={logo} /></div>
            </div>            
        </div>
    </div>
  )
}

export default Home