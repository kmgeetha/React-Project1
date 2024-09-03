import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LangingPage from './LangingPage'
import './App.css'
import AdminPortal from './Component/AdminPortal'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<LangingPage/>} path='/' />
        <Route element={<AdminPortal/>} path='/adminportal/*' />
      </Routes>

    </BrowserRouter>

    </>
  )
}

export default App