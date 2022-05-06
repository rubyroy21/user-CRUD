import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const EditUser = () => {

  const userDetails = {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  }
  const [user, setUser] = useState(userDetails)

  let navigate = useNavigate()

  const {id} = useParams()

  const {name, username, email, phone, website} = user

  const onInputChange = (e) => {
    setUser({...user,[e.target.name] : e.target.value})
  }

  useEffect(() => {
    loadUser()
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user)
    navigate("/")
  }

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`)
    setUser(result.data)
  }

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h1>Edit A User</h1>
          <form onSubmit={e => {onSubmit(e)}}>
            <div className='form-group mb-2'>
              <input type="text" className='form-control form-control-lg' placeholder='Enter Your Name' name='name' onChange={(e) => {onInputChange(e)}} value={name}/>
            </div>
            <div className='form-group mb-2'>
              <input type="text" className='form-control form-control-lg' placeholder='Enter Your Username' name='username' onChange={(e) => {onInputChange(e)}} value={username}/>
            </div>
            <div className='form-group mb-2'>
              <input type="email" className='form-control form-control-lg' placeholder='Enter Your Email' name='email' onChange={(e) => {onInputChange(e)}} value={email}/>
            </div>
            <div className='form-group mb-2'>
              <input type="text" className='form-control form-control-lg' placeholder='Enter Your Phone Number' name='phone' onChange={(e) => {onInputChange(e)}} value={phone}/>
            </div>
            <div className='form-group mb-2'>
              <input type="text" className='form-control form-control-lg' placeholder='Enter Your Website Name' name='website' onChange={(e) => {onInputChange(e)}} value={website}/>
            </div>
            <button className='btn btn-warning btn-black mb-2'>Update User</button>
          </form>
      </div>
    </div>
  )
}
