import React, { useRef } from 'react'
import './Style/landingPage.css'
import { useNavigate } from 'react-router-dom'



const LangingPage = () => 
  {
  let emailf = useRef()
  let pswdf = useRef()
  let navigate= useNavigate()

  let handlesubmit = (e) => {
    e.preventDefault()

    //collecting input field
    let email = emailf.current
    let pswd = pswdf.current


    let credentail = {
      emailaddress: "admin@gmail.com",
      password: "admin123"
    }
    let { emailaddress, password } = credentail

    if (email.value === emailaddress && pswd.value === password) 
      {
          navigate('/adminportal')
     }
      else{
        let css=`border: solid 2px red; background: rgba(225,0,0,0.4)`;
        email.style.cssText=css;
        pswd.style.cssText=css;

      }

  }       


  return (
    <>
    <div className="landing">
        <div className="form">
            <form onSubmit={handlesubmit}>
              <h1>React Project</h1>
                <input ref={emailf} type="email" placeholder='Enter Email Address' />
                <input ref={pswdf} type="password" placeholder='Enter Password' />
                <button>Login</button>
                <p>Forget Password......?</p>
            </form>
        </div>
    </div>
    </>
  )
}

export default LangingPage 











