import React, { useEffect, useState } from 'react'
import '../Style/users.css'
import { useNavigate } from 'react-router-dom'

const Users = () => {

    let [users, setUsers]= useState([])
    useEffect(()=>{
        let fetchApi=()=>{
          fetch('https://jsonplaceholder.org/users')
            .then(resp=>resp.json())
            .then(data=>{
                setUsers(data)
            })

        }
        fetchApi()

    },[users])

    let navigate= useNavigate()
    let handleClick=(id)=>{
        navigate(`/adminportal/userslogin/${id}`)
    }

    // console.log(users);
  return (
    <>
    <div className="users">
     <div className="header"><h1>Developers</h1></div>

     <div className="container">
            
            {users.map((elem)=>{
            let {firstname,lastname,id}=elem
            return(

              <>
                <div className="username" onClick={()=>handleClick(id)}>
                    {firstname}, {lastname}
                </div>
              </>
                )
              })}
      </div>
      
        
    </div>
    </>
  )
}

export default Users