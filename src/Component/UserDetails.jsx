import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    let params= useParams()
    let userId=params.id

    let [userDetails,setUserDetails]=useState({})

    useEffect(()=>{
        let fetchApi=()=>{
            let fetchuserId= async ()=>{
            let url=    await fetch(`https://jsonplaceholder.org/users/${userId}`)
               url.then(resp=> resp.json())
                 .then(data=> 
                  setUserDetails(data)
                )
              }
          
              fetchuserId()
        }
        fetchApi()
        
    },[userDetails] )


    console.log(userDetails);

    let {id,firstname,lastname,email,birthDate, address,phone,website,company  } =userDetails
    let {street,city}=address
    let {name,catchPhrase,bs}=company
    console.log(street);

  return (
    <div className="userdetails">
            <div className='header'>UserDetails</div>
           <div>
             <table>
                    <tr>
                        <th> id</th>
                        <td> {id} </td>

                    </tr>
                    <tr>
                        <th>Fname</th>
                        <td> {firstname} </td>

                    </tr>
                    <tr>
                        <th>Lname</th>
                        <td> {lastname} </td>

                    </tr>
                    <tr>
                        <th>email</th>
                        <td> {email} </td>

                    </tr>
                    <tr>
                        <th>Date Of Birth</th>
                        <td> {birthDate} </td>

                    </tr>
                    <tr>
                        <th>street</th>
                        <td> {street} </td>

                    </tr>
                    <tr>
                        <th>city</th>
                        <td> {city} </td>

                    </tr>
                    <tr>
                        <th>Phone no</th>
                        <td> {phone} </td>
                    </tr>
                    <tr>
                        <th>website</th>
                        <td> {website} </td>

                    </tr>
                    <tr>
                        <th>Company Name</th>
                        <td> {name} </td>

                    </tr>
                    <tr>
                    <th>catchPhrase</th>
                    <td> {catchPhrase} </td>

                    </tr>
                    <tr>
                    <th>bs</th>
                    <td> {bs} </td>

                    </tr>




               

            </table>
            
            </div> 

    </div>
  )
}

export default UserDetails