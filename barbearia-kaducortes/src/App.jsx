import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css'
import { Home } from './pages/Home/Home'

function App() {


  return (
    <>
    <BrowserRouter>
    
    <Routes>

    <Route path='/' element={<Home/>}></Route>


    </Routes>
    
    </BrowserRouter>


    </>
  )
}

export default App
