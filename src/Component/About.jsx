import React from 'react'
import '../Style/about.css'
import about from '../Images/web-removebg-preview.png'


const About = () => {
  return (
    <div className="about">
      <div className="header">About Developer</div>
      <div className="container">
          <div className="box">
            <div className='image'>
              <img src= {about} alt='about image'/>
            </div>
          </div>

      </div>
    </div>
  )
}

export default About