import React, { useState } from 'react'
import { HeaderAgendamento } from '../../../components/HeaderAgendamento/HeaderAgendamento'
import horarioImg from "../../../imagens/fundomain.jpg"

import "./Time.css"
import { useAgendamentoContext } from '../../../context/AgendamentoContext'

export const Time = () => {

    const {agendamento} = useAgendamentoContext()
    console.log(agendamento)

    const [horario, setHorario] = useState("")
    const [dia, setDia] = useState("")


    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0'); 
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const year = today.getFullYear(); 

    var currentDate = `${day}/${month}/${year}`; // Format as "dd/mm/yyyy"

    const updateHour = (e:any) =>{
        const element = e.target
        const hour = e.target.innerHTML

        if(horario != "" && horario == hour){


            element.classList.remove("selected")
            setHorario("")
        }
        else{
            document.querySelector(".selected")?.classList.remove("selected");
            element.classList.add("selected")
            setHorario(hour)
        }

        
    }

  return (
    <>
      <HeaderAgendamento title='Escolha sua data e horário' bgImage={horarioImg}/>

      <form >

<section id="horario-box">
    <section id="horario">
        <h1 id="h1">{currentDate}</h1>

        <label > Horários Disponíveis: </label>
        <div id="input-time">
          
            <p onClick={(e) => updateHour(e)} className="available-hour">8:00 - 9:00 </p>
            <p onClick={(e) => updateHour(e)} className="available-hour">9:00 - 10:00</p>
            <p onClick={(e) => updateHour(e)} className="available-hour">10:00 - 11:00</p>
            <p onClick={(e) => updateHour(e)} className="available-hour">11:00 - 12:00</p>
            <p onClick={(e) => updateHour(e)} className="available-hour">13:00 - 14:00</p>
            <p onClick={(e) => updateHour(e)} className="available-hour">14:00 - 15:00</p>
            <p onClick={(e) => updateHour(e)} className="available-hour">16:00 - 17:00</p>
            <p onClick={(e) => updateHour(e)} className="available-hour">17:00 - 18:00</p>
            <p onClick={(e) => updateHour(e)} className="available-hour">18:00 - 19:00</p>
             
           
        </div>

        <div>

            <a id="previousDay">  </a>
            <a id="nextDay">  </a>
        </div>



    </section>
</section>

<div id="botoes">
    <div id="botao-voltar"><a href="/agendamento/corte" > <span className="material-symbols-outlined" style={{fontSize:"68px"}}>
    arrow_circle_left
    </span></a> </div>

    <div id="botao-proximo"><a href="/agendamento/dados" > <span className="material-symbols-outlined" style={{fontSize:"68px"}}>
        arrow_circle_right
        </span></a> </div>
</div>

<input id="schedule" className="none" name="schedule" type="text"/>
</form>
    </>
  )
}
