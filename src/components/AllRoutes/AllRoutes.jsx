import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { AddUsers } from '../Users/AddUsers'
import { EditUser } from '../Users/EditUser'
import { User } from '../Users/User'

export const AllRoutes = () => {
  return (
    <div>
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='*' element={<NotFound/>} /> 
        <Route exact path='/users/add' element={<AddUsers/>} /> 
        <Route exact path='/users/edit/:id' element={<EditUser/>} /> 
        <Route exact path='/users/:id' element={<User/>} /> 
    </Routes>
    </div>
  )
}
