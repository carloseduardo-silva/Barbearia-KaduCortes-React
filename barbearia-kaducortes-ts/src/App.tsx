import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css'
import { Home } from './pages/Home/Home'
import { HaircutType } from './pages/Agendamento/haircutType/HaircutType'
import { Time } from './pages/Agendamento/time/Time'
import { ClientData } from './pages/Agendamento/clientData/ClientData'
import { Confirmed } from './pages/Agendamento/confirmed/Confirmed'
import { AgendamentoProvider } from './context/AgendamentoContext'

function App() {
  

  return (
    <>
    <BrowserRouter>

    <AgendamentoProvider>  
      <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/agendamento/corte' element={<HaircutType/>}></Route>
        <Route path='/agendamento/horario' element={<Time/>}></Route>
        <Route path='/agendamento/dados' element={<ClientData/>}></Route>
        <Route path='/agendamento/comprovante' element={<Confirmed/>}></Route>

      </Routes>
    </AgendamentoProvider>    
    </BrowserRouter>


    </>
  )
}

export default App
