import React, { useState,useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../Style/userlogin.css'

const UsersLogin = () => {
   let params= useParams()
  //  console.log(params);
   let userId= params.id;

   let [userData,setUserData]= useState({})

  useEffect(()=>{
    let fetchuserId= async ()=>{
      fetch(`https://jsonplaceholder.org/users/${userId}`)
      .then(resp=> resp.json())
      .then(data=> 
        setUserData(data)
      )
    }

    fetchuserId()
  },[userData])

  let { firstname,lastname,email ,login,id} =userData

    let pswdFeild= useRef()
    let inputPswd=pswdFeild.current
    console.log(pswdFeild);


    let navigate= useNavigate()

    let handlesubmit =(e)=>{
      e.preventDefault()
      if (login.password===inputPswd.value) {
        navigate(`/adminportal/userdetails/${id}`)
      }
      else{
        inputPswd.style.cssText=`border:solid 1px red ; box-shadow:inset 1px 1px 10px red`

      }

    }


  // console.log(userData);


  return (
    <>
    <div className="userlogin">
      <div className="header">User Login Page</div>

      <div className='container'> 
          <div className="username"> {firstname} {lastname} </div>

          <div>
            <form onSubmit={handlesubmit}>
              <input type="email"  placeholder= {email} disabled />
              <input type="text" ref={pswdFeild} />
              <button>Users  Login</button>
            </form>
          </div>
      </div>

    </div>
    </>
  )
}

export default UsersLogin
